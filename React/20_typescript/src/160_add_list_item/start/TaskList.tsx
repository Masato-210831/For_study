import type { Todo } from "./Example"

type TaskListProps = {
  todos: Todo[]
}

const TaskList:React.FC<TaskListProps> = ({todos}) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.todo}</li>
      ))}
    </ul>
  )
}

export default TaskList
