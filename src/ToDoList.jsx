import React, { useState } from 'react';
import './App.css';
import Lok from './Props';


function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input) {
            setTasks([...tasks, { text: input, completed: false }]);
            setInput('');
        }
    };

    const toggleTask = (index) => {
        const newTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        <span onClick={() => toggleTask(index)}>{task.text}</span>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <Lok/>
        </div>
    );
}

export default ToDo;
