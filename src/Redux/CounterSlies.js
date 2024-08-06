import { createSlice } from "@reduxjs/toolkit";
let initialState = {
    counter: 0,
    userName: ""
}
let counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state) => {
            state.counter+=1
            console.log('icreeaseing');
        },
        decrease: (state) => {
            state.counter-=1
            console.log('decrease');
        },
        increaseByAmount:(state,action)=>{
            state.counter+=action.payload
            console.log(action);
    }

    }//methos which updata in the state
});
export let counterreducer = counterSlice.reducer
export let {increase,decrease,increaseByAmount}=counterSlice.actions