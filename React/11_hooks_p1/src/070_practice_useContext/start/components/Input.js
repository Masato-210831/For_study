import React from "react";
import { useNumber, useChangeNumber } from "../context/NumberContext";

const Input = ({ name }) => {
  const dispatch = useChangeNumber();
  const state = useNumber();

  const numChangeHandler = (e) => {
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: parseInt(e.target.value) },
    });
  };

  return (
    <div>
      {name}:
      <input
        type="number"
        name={name}
        value={state[name]}
        onChange={numChangeHandler}
      />
    </div>
  );
};

export default Input;
