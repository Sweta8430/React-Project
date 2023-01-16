import ToDoForm from "./ToDoForm";
import { useState } from "react";
import ToDos from "./ToDos";

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const addTodos = (todo) => {
        if (todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        
    }
    const completeTodo = (id) => {
        let completedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todos;
        })
        setTodos(completedTodos);
        
    }
    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <ToDoForm onSubmit={addTodos} />
            <ToDos
                todos={todos}
                completeTodo={completeTodo}
            />
        </div>
    );
};

export default ToDoList;