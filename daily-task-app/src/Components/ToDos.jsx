import { useState } from "react";
import TodoForm from "./ToDoForm";
import { RiCloseCircleLine } from "react-icons/ri"
import { TiEdit } from "react-icons/ti"

const ToDos = ({ todos, completeTodo }) => {
    const [edit, setEdit] = useState({ id: null, value: "" });
    const deleteTodos = (id) => {
        if (todos.id === id) {
            todos.
        }
        
    }
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
            <div key ={todo.id} onClick={()=>completeTodo(todo.id)}>
            {todo.test}
            </div>
            <div className="icons">
                <RiCloseCircleLine onClick={()=>deleteTodos(todo.id)} />
                <TiEdit/>
                
            </div>
        </div>
    ))
};

export default ToDos;