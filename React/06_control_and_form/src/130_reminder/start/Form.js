import { useState } from "react";

const Form = ({createTodo}) => {

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo)
    setEnteredTodo('')

  };
  const [enteredTodo, setEnteredTodo] = useState("");

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        ></input>
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
