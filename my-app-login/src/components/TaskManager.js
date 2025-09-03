import React, { useState } from 'react'
import './TaskManager.css';


const TaskManager = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Read', status: 'Complete' },
        { id: 2, text: 'Write', status: 'Incomplete' },
        { id: 3, text: 'Learn', status: 'Complete' }
    ]);

    const handleChange = (e, id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, text: e.target.value } : task
        );
        setTasks(updatedTasks);
    };

    const [taskInput, setTaskInput] = useState('')

    const addTask = () => {
        if (taskInput.trim() === '') return;
        const newTask = {
            id: tasks.length + 1,
            text: taskInput,
            status: 'Incomplete'
        };
        setTasks([...tasks, newTask]);
        setTaskInput('');
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const editTask = (id) => {
        let updatedTask = tasks.filter(task => task.id === id)[0];
        console.log(updatedTask)
        if (updatedTask) {

        updatedTask.status = updatedTask.status === "Complete" ? "Incomplete" : "Complete";
        
        const updatedTasks = tasks.map(task => 
            task.id === id? updatedTask:task
        );

        setTasks(updatedTasks);
        }
        
    };

    return (
        <div className='task-manager'>
            <h1>Task Manager</h1>

            <div className='task-input-container'>
                <input
                    type='text'
                    className='task-input'
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder='Enter a task'
                />
                <button className='add-task-btn' onClick={addTask}>Add Task</button>
            </div>

            {tasks.map((task) => {
                return (
                    <div key={task.id} className="input-area">
                        <input
                            value={task.text}
                            onChange={(e) => handleChange(e, task.id)}
                        />
                        <span className={`status`}>
                            Status: {task.status}
                        </span>
                        <button className='edit-btn' onClick={() => editTask(task.id)}>Change status</button>
                        <button className='delete-btn' onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
};

export default TaskManager