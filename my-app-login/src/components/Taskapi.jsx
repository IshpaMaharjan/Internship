import React, { useEffect, useState } from "react";
import './Taskapi.css'

const Taskapi = () => {  // Using arrow function
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [newTask, setNewTask] = useState("");

    const handleChange = (e, id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, text: e.target.value } : task
        );
        setTasks(updatedTasks);
    };    


    const fetchTasks = () => {
        fetch("http://localhost:3001/tasks")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched tasks:", data);
                setTasks(data);
            })
            .catch((error) => console.log("Error fetching tasks:", error));
        };

    useEffect(() => {
        fetchTasks();
    }, []);


    const addTask = () => {
        if (taskInput.trim() === '') return;
        
        fetch("http://localhost:3001/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                text: taskInput,
                status: "Incomplete"
            })
        })
            .then((response) => response.json())
            .then((task) => {
                setTasks((prev) => [...prev, task]);
                setTaskInput("");
                fetchTasks();
            })
            .catch((error) =>console.error("Error adding task:", error));
        };
        

    const deleteTask = (id) => {
        fetch(`http://localhost:3001/tasks/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            fetchTasks();
        })
        .catch(error => console.error("Error deleting task:", error));
     };

    const editTask = (id) => {
        let updatedTask = tasks.filter(task => task.id === id)[0];
        console.log(updatedTask)
        if (updatedTask) {

        updatedTask.status = updatedTask.status === "Complete" ? "Incomplete" : "Complete";
        
        fetch(`http://localhost:3001/tasks/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTask)
        })
        .then(response => response.json())
        .then(() => {
            fetchTasks();
        })
        .catch(error => console.error("Error updating task:", error));
        }
    };

    return (
        <div className='task-api'>
            <h1>Task Manager</h1>
            
            <div className="task-input-container">
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

export default Taskapi;