import { useDispatch, useSelector } from "react-redux";
import { addTodo,  updateTodo } from "../features/todo/todoSlice";
import { useEffect, useState } from "react";

const AddTodo = () => {
    const [input, setInput] = useState('');
    const [editMode, setEditMode] = useState(false);
    const todos = useSelector(state => state.todos);
    
    const dispatch = useDispatch();
    
    const addTodoHandler = e => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

    const updateTodoHandler = e => {
        e.preventDefault();
        dispatch(updateTodo(input));
        setInput('');
        setEditMode(false);
    } 

    useEffect(() => {
        todos.map(todo => {
            if(todo.isEdit == true) {
                setEditMode(true);
                setInput(todo.text);
            }
        })
    }, [todos]);

    return (
        <form onSubmit={editMode ? updateTodoHandler : addTodoHandler} className="space-x-3 mt-12">
            <input              
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                { editMode ? "Update" : "Add"} Todo
            </button>
        </form>
    )
};

export default AddTodo;