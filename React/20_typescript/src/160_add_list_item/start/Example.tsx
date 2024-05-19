import { useState } from "react";
import TaskList from "./TaskList";

export type Todo = {
  id:number,
  todo:string
}

const Example = () => {

  const [todos, setTodos] = useState<Todo[]>([{id:1, todo:'Todo1'}, {id:2, todo:'Todo2'}])
  const [inputText, setInputText] = useState('')
  console.log(todos)


  const appendTodos = () => {
    setTodos(prev => {
      const newTodos = [...prev, {id:todos.length+1, todo:inputText}]
      setInputText('')

      return newTodos
    })
  }

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)

  return(
    <>
    <input type="text" value={inputText} onChange={ changeHandler } />
    <button onClick={appendTodos}>追加</button>
    <TaskList  todos={todos}/>
    </>
  )
  
};

export default Example;
