import { createSlice } from "@reduxjs/toolkit";

export let authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isLoading:true,
    },
    reducers:{
        addUser:(state,action)=>{
            state.user = action.payload;
            state.isLoading = false;
        },
        removeUser:(state)=>{
            state.user = null;
            state.isLoading = false;
        }
    }
});

export let {addUser , removeUser} = authSlice.actions