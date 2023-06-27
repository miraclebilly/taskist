import React from 'react'
import TaskList from './TaskList'

export default function Add() {
    const [addTask, setAddTask] = React.useState('')
    const [tasks, setTasks] = React.useState([])
    

    function handleTaskSubmit(e){
        e.preventDefault()
       setTasks([...tasks, addTask]);
       setAddTask('');
    }

    const handleTaskChange = (e) => {
        setAddTask(e.target.value)
    }
    

    return(
        <div>
            <form onSubmit={handleTaskSubmit}>
                <textarea 
                    placeholder="Please enter Task" 
                    name={addTask} 
                    value={addTask}              
                    onChange={handleTaskChange}              
                >
                </textarea>
                <button type="submit" 
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Add Task
                
                </button>
            </form>
            <TaskList tasks={tasks} />
        </div>
    )
}