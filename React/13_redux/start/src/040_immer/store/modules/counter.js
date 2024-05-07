import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    add(state, { type, payload }) {
      // 引数を書き換えるのでこれは純粋関数ではない
      state.count = state.count + payload;  // tookkitの中ではミュータブルな記述が可能 returnは書かない!!

      // const newState = { ...state }; // 純粋関数であるため、スプレッド演算子で値渡し
      // newState.count = state.count + payload;
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload; 
      // const newState = { ...state };
      // newState.count = state.count + payload;
      // return newState;
    },
  },
});

const { add, minus } = counter.actions;

export { add, minus };
export default counter.reducer;
