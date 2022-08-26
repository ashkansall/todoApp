import { useEffect, useRef, useState } from "react";

const TodoFrom = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.text : "");

    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const changeHandler = (e) => {
        setInput(e.target.value);
    }

    const submitHnadler = (e) => {
        e.preventDefault();

        if (!input) {
            alert('enter todo !');
            return;
        }

        props.submitTodo(input);
       setInput("");
    }
    return ( 
        <form onSubmit={submitHnadler}>
            <div className="foromControl">
                <input 
                type="text" 
                value={input} 
                onChange={changeHandler} 
                placeholder={props.edit ? "Update" : "Add Your Todos..."} 
                ref={inputRef}
                />
                <button className={`btn ${props.edit ? "updateTodo" : "addTodo"}`} type="submit">{props.edit ? "update" : "Add"}</button> 
            </div>

            {/* same things in input in repeating so we need to make it dynamic */}
            {/* {props.edit ? 
            <>
                <input type="text" value={input} onChange={changeHandler} placeholder="update todo..." ref={inputRef}/>
                <button type="submit">Update</button>
            </>
            :*/}

            
        </form>
     );
}
 
export default TodoFrom;