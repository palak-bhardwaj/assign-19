import { createSlice } from "@reduxjs/toolkit";

let counterSlice=createSlice({

    name:'counter',
    initialState:{value:0},
    reducers:{
        Increment:(state)=>{
        state.value++
        },
        Decrement:(state)=>{
            state.value--
        },
        IncreaseBy5:(state,action)=>{
            state.value+=action.payload
        },
        DecreaseBy5:(state,action)=>{
            state.value-=action.payload
        },
        Settozero:(state,action)=>{
            state.value=0
        }
    }

})
export default counterSlice.reducer;
export const  {Increment,Decrement,IncreaseBy5,DecreaseBy5,Settozero}= counterSlice.actions;
