import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    // methodを記述
    add(state, { type, payload }) {
      console.log(type, payload);
      return state + payload;
    },
    minus(state, { type, payload }) {
      console.log(type, payload);
      return state - payload;
    },
  },
});


const {add, minus} = counter.actions



export { add, minus };

export default counter.reducer
