import { useState } from "react";
const ToDoForm = (props) => {
    const [input, setInput] = useState("");
    const handleSubmitEvent =  (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            test:input
        })
        setInput("");
    }
    return (
        <form onSubmit={ handleSubmitEvent} className="todo-form">
            <input type="text" value={input}
                placeholder="Add a task" onChange={e => setInput(e.target.value)}
                className="todo-input" />
            <button className= "todo-button">Add Todo</button>
            </form>
    );
};

export default ToDoForm;