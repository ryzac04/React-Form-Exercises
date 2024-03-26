
const Todo = ({ id, todo, removeTodo }) => {
    const handleRemove = () => {
        removeTodo(id);
    }
    return (
        <ul>
            <li>{todo}</li>
            <button onClick={handleRemove}>X</button>
        </ul>
    )
}

export default Todo;