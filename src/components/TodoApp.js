import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import TodoFrom from "./TodoForm";
import TodoList from "./TodoList";


const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [selectedOption, setSelectedOption] = useState("All");
    const [searchValue, setSearchValue] = useState("");
    
    // todos?
    useEffect(() => {
        filterTodos(selectedOption.value);

        let filter = [...todos];
        filter = filter.filter((todo) => {
            let value = todo.text.toLowerCase();
            return value.includes(searchValue.toLowerCase());
        });
        setFilteredTodos([...filter]);

    }, [todos, selectedOption, searchValue]);

    const addTodo = (input) => {
        // console.log(input);
        const newTodo = { 
            id: Math.floor(Math.random() * 100),
            text: input,
            isCompleted: false
            };
            setTodos([...todos, newTodo]);
    }

    const completeTodo = (id) => {
        // console.log(id);
        const index = todos.findIndex((todo) => todo.id === id);
        // clone : DO NOT MUTATE
        const selectedTodo = { ...todos[index] };
        selectedTodo.isCompleted = !selectedTodo.isCompleted;
        console.log(selectedTodo);
        // clone todos
        const updatedTodos = [...todos];
        updatedTodos[index] = selectedTodo;
        setTodos(updatedTodos);
    }
    const removeTodo = (id) => {
        // console.log(id);
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    }
    const updateTodo = (id, newValue) => {
        // console.log(id);
        const index = todos.findIndex((todo) => todo.id === id);

        const selectedTodo = { ...todos[index] };

        selectedTodo.text = newValue;

        const updatedTodos = [...todos];

        updatedTodos[index] = selectedTodo;
        setTodos(updatedTodos);
    }
    const filterTodos = (status) => {
        // console.log(status);
        switch (status) {
            // case 'All':
            //     setFilteredTodos(todos);
            //     break;
            case 'Completed':
                setFilteredTodos(todos.filter((t) => t.isCompleted));
                break;
            case 'Uncompleted':
                setFilteredTodos(todos.filter((t) => !t.isCompleted));
                break;
            default: setFilteredTodos(todos);
               
        }
    };
    const selectHandler = (e) => {
        
        // setStatus(e.target.value)
        // filterTodos(e.target.value);
        // use select-option
        setSelectedOption(e);
        console.log(e);
        filterTodos(e.value);

    }
    
    
    
    
    return ( 
        <div className="container">
            <NavBar unCompletedTodos={todos.filter((t) => !t.isCompleted).length} selectedOption={selectedOption} onChange={selectHandler}/>
            <TodoFrom submitTodo={addTodo}/>
            {todos.length > 0 ? <Search todos={todos} searchValue={searchValue} setSearchValue={setSearchValue}/> : null}
            <TodoList todos={filteredTodos} onComplete={completeTodo} onDelete={removeTodo} onUpdateTodo={updateTodo}/>
        </div>
     );
}
 
export default TodoApp;