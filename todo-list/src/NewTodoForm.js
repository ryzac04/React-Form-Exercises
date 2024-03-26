import { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
    const [formData, setFormData] = useState({ todo: '' });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ ...formData });
        setFormData({ todo: '' });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">New Task: </label>
            <input
                id="todo"
                type="text"
                name="todo"
                placeholder="Add a new todo!"
                value={formData.todo}
                onChange={handleChange}
            />
            <button>Add Task</button>
        </form>
    )
}

export default NewTodoForm;