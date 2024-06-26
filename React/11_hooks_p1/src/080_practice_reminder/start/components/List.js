import Item from "./Item";
import { useTodos } from "../context/TodoContext";

const List = () => {
    const todos = useTodos()
    console.log(todos)

   
    return (
        <div>
            {todos.map(todo => {
                return <Item  key={todo.id} todo={todo} />
            })}
        </div>
    );
}

export default List;