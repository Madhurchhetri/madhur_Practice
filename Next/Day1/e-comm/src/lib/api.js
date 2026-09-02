import axios from "axios";

export let api = axios.create({
    baseURL:"https://madhur-practice.onrender.com/",
    withCredentials:true,
})