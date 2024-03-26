import { fireEvent, render} from '@testing-library/react';
import TodoList from './TodoList';

function addTodo(todoList, todo = "Laundry") {
    const todoInput = todoList.getByLabelText("New Task:");
    fireEvent.change(todoInput, { target: { value: todo } });
    const submitButton = todoList.getByText("Add Task");
    fireEvent.click(submitButton);
}

it("renders without crashing", function () {
    render(<TodoList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot;
});

it("can add a todo", function () {
    const list = render(<TodoList />);
    addTodo(list);

    expect(list.getByLabelText("New Task:")).toHaveValue("");
    expect(list.getByText("Laundry")).toBeInTheDocument();
    expect(list.getByText("X")).toBeInTheDocument();
});

it("can delete a todo", function() {
    const list = render(<TodoList />);
    addTodo(list);

    fireEvent.click(list.getByText("X"));

    expect(list.queryByText("Laundry")).not.toBeInTheDocument();
})