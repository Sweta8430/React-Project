import { useState,useEffect,useRef } from "react";
const ToDoForm = (props) => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    
    const [input, setInput] = useState(props.edit?props.edit.value:"");
    const handleSubmitEvent =  (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            test:input
        })
        setInput("");
    }
    return (
        <form onSubmit={handleSubmitEvent} className="todo-form">
            { props.edit?(<><input type="text" value={input}
                placeholder="Update a task" onChange={e => setInput(e.target.value)}
                className="todo-input edit" ref = {inputRef}
            required/>
            <button className= "todo-button edit">Update</button></>):(<><input type="text" value={input}
                placeholder="Add a task" onChange={e => setInput(e.target.value)}
                className="todo-input" ref = {inputRef}
            required/>
            <button className= "todo-button">Add Todo</button></>)}
            
            </form>
    );
};

export default ToDoForm;