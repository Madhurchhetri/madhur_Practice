"use client"
import { api } from "@/lib/api";
import { createContext } from "react";

let Auth = createContext();

let AuthProvider = ({children})=>{
    let hydrateUser = async()=>{
        try {
           
            let res = await api.get('/api/auth/me')
        } catch (error) {
            console.log('error in hydration', error);
            
        }
    }
    return <Auth.Provider>
        {children}
    </Auth.Provider>
}