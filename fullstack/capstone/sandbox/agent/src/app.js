import express from 'express'
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

const WORKING_DIR = '/workspace';

const app = express();

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.status(200).json({
        message : "hello from sandbox agent",
        status: "success"
    })
})

app.get('/list-files' , async (req, res)=>{
    const listFiles = async (dir , baseDir) =>{
        const entries = await fs.promises.readdir(dir,{ withFileTypes: true });
        const files = [];

        for (const entry of entries){
            const fullPath = path.join(dir, entry.name);
            const relativePath = path.relative(baseDir, fullPath);

            if(entry.isDirectory() && ['node_modules' , '.git', 'dist'].includes(entry.name)){
                continue ;
            }
            if(entry.isDirectory()){
                files.push(...await listFiles(fullPath, baseDir));
            }else{
                files.push(relativePath);
            }
        }

        return files;
    }
    try {
        const files = await listFiles(WORKING_DIR , WORKING_DIR);
        res.status(200).json({
            message : 'Files listed successfully',
            files
        })
    } catch (error) {
        res.status(500).json({
            message : `error listing file ${error.message}`,
            status : 'error'
        });
    }
})

app.get('/read-files', async (req,res)=>{
    const files = req.query.files;

    if(!files){
        return res.status(400).json({
            message: 'No files specified in query parameter',
            status: 'error',
        });
    }

    const fileList = files.split(',');

    const results = await Promise.all(fileList.map(async(file)=>{
        const filePath = path.join(WORKING_DIR,file)
        try {
            const content = await fs.promises.readFile(filePath, 'utf-8');
            return {
                [filePath.replace(WORKING_DIR,'')] : content
            }
        } catch (error) {
            return {
                [filePath.replace(WORKING_DIR,'')] : `error reading file: ${error.message}`
            }
        }
    }));

    res.status(200).json({
        message: 'file contents',
        files : results,
    })
})

app.patch('/update-files' , async (req,res)=>{

    const updates = req.body.updates;

    if(!updates || !Array.isArray(updates)){
        return res.status(400).json({
            message : "Invalid request body. Expected a json object with an 'updates' property containing an array of file updates ",
            status : 'error',
        })
    }

    const results = await Promise.all(updates.map(async (update)=>{
        const {file , content} = update;
        const filePath = path.join(WORKING_DIR , file);
        try {
            await fs.promises.mkdir(path.dirname(filePath), {recursive:true})
            await fs.promises.writeFile(filePath , content , 'utf-8');
            return {
                [filePath] : 'file update successfully'
            }
        } catch (error) {
            return {
                [filePath] : `error updating file : ${error.message}`
                
            }
        }
    }));

    res.status(200).json({
        message : 'file update result',
        results,
    });
})

app.post('/create-files' , async (req,res)=>{
    const files = req.body.files;

    if(!files || !Array.isArray(files)){
        return res.status(400).json({
            message: 'Invalid request body . Expected a json object with the "files" property containing an array of file create',
            status : 'error',
        })
    }

    const results = await Promise.all(files.map(async(fileObj)=>{
        const {file,content} = fileObj ;
        const filePath = path.join(WORKING_DIR , file);

        try {
            await fs.promises.mkdir(path.dirname(filePath), {recursive:true})
            await fs.promises.writeFile(filePath , content , 'utf-8')
            return {
                [filePath] : 'file created successfully'
            }
        } catch (error) {
            return {
                [filePath] : `error creating file : ${error.message}`
            }
        }
    }));

    res.status(200).json({
        message: 'files creation results',
        results,
    })

})

export default app