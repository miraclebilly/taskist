import React from 'react'
import Add from './Add'
import TaskList from './TaskList'

export default function Main() {
    const [tasks, setTasks] = React.useState([]);

    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
    };

    const handleEditTask= (index, editedTask) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = editedTask;
        setTasks(updatedTasks);
    }


    return(
        <div>
            <h1>All Task</h1>
            <Add  onAdd={handleAddTask} /> <br/>
            <TaskList tasks={tasks} onEdit={handleEditTask} />        
        </div>
    )
}