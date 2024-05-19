import { useState } from "react";

const Example = () => {
  const [text, setText ] = useState('hello');

  const [animals, setAnimals] = useState<string[]>(['dog', 'cat'])

  type User = {
    name: string,
    age: number
  }

  const [users, setUsers] = useState<User[]>([{name:'taro', age:11}])

  type Todo = {
    id: number,
    text: string
  }

  const [todos, setTodos] = useState<Todo[]>([{id:0, text:'homework'}])


};

export default Example;
