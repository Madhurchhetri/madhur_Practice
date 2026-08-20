import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
    },
    reducers:{
        addUser:(state,action)=>{
            state.user = action.payload;
        }
    }
});