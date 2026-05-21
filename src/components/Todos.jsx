import { useSelector } from "react-redux"
import { getAllTodos } from "../redux/slices/todosSlice"

const Todos = () => {
    const todos = getAllTodos(useSelector(state => state))
    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Todos