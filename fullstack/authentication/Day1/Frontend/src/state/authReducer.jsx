import { createSlice } from "@reduxjs/toolkit";

export let authSlice = createSlice({
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

export let {addUser} = authSlice.actions