import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import { z } from "zod";
import { recommendCatsTool } from "./tools/recommendCats.tool.ts";


// Create server instance
const server = new McpServer({
  name: "tiny-cats",
  version: "1.0.0",
});

// register tools

server.registerTool("recommend_cats",{
    title:"recommend_cats",
    description:"recommend a best cat breed according to Inputs",
    inputSchema:{
        kidsFriendly : z.boolean(),
        apartmentFriendly : z.boolean()
    }
},
async({kidsFriendly , apartmentFriendly})=>{
    const result = await recommendCatsTool(kidsFriendly , apartmentFriendly);

    return {
        content:[
            {
                type:"text",
                text: JSON.stringify(result),
            }
        ]
    }
})

const transporter = new StdioServerTransport();

await server.connect(transporter)

console.error("tiny cats mcp runing...")