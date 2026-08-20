import axios from "axios";

export let axiosInstance = axios.create({
    baseURL : "http://localhost:3000",
})

// axiosInstance.interceptors.response(
//     (response)=>{
//         console.log('response' , response)
//         return response
//     },
//     (error)=>{
//         console.log('error in instance' ,error);
        
//     }
// )