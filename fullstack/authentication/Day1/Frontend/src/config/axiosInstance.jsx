import axios from "axios";

export let axiosInstance = axios.create({
    baseURL : "http://localhost:3000",
    withCredentials: true,
})

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },

    async (error) => {
        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest.retry &&
            originalRequest.url !== "/api/auth/get-access"
        ) {
            originalRequest.retry = true;

            try {
                await axiosInstance.get("/api/auth/get-access");

                return axiosInstance(originalRequest);

            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

// axiosInstance.interceptors.response(
//     (response)=>{
//         console.log('response' , response)
//         return response
//     },
//     (error)=>{
//         console.log('error in instance' ,error);
        
//     }
// )