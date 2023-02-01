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
            return todo;
        })
        setTodos(completedTodos);
        
    }
     const deleteTodos = (id) => {
         const removeTodo = [...todos].filter(todo => todo.id !== id)
         setTodos(removeTodo);     
    }
    const editTodos = (id,newValue) => {
       if (newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === id ? newValue : item)));
    }
    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <ToDoForm onSubmit={addTodos} />
            <ToDos
                todos={todos}
                completeTodo={completeTodo}
                deleteTodos={deleteTodos}
                editTodos={editTodos}
            />
        </div>
    );
};

export default ToDoList;