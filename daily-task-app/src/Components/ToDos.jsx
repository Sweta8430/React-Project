import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri"
import { TiEdit } from "react-icons/ti"
import ToDoForm from "./ToDoForm";


const ToDos = ({ todos, completeTodo,deleteTodos,editTodos }) => {
    const [edit, setEdit] = useState({ id: null, value: "" });
    const submitUpdate = (value) => {
        editTodos(edit.id, value);
        setEdit({ id: null, value: "" });     
    }
    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate } /> 
    }
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
            <div key ={todo.id} onClick={()=>completeTodo(todo.id)}>
            {todo.test}
            </div>
            <div className="icons">
                <RiCloseCircleLine onClick={() => deleteTodos(todo.id)}
                className="delete-icon"/>
                <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.test })}
                className="edit-icon"/>
                
            </div>
        </div>
    ))
};

export default ToDos;