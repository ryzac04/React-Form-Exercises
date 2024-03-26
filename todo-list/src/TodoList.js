import { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";


const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {...newTodo, id: uuid()}])
    }

    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    return (
        <div>
            <h3>Todo List</h3>
            <NewTodoForm addTodo={addTodo} />
            <div>
                {todos.map(({ id, todo }) => <Todo key={id} id={id} todo={todo} removeTodo={removeTodo} />)}
            </div>
        </div>
    )
}

export default TodoList;