import React from 'react'

export default function TaskList({tasks, onEdit, deleteTask}) {
    const [editTask, setEditTask] = React.useState('');

    const handleEditTask = (index) => {
        setEditTask(tasks[index]);
    };

    const handleUpdateTask = (index) => {
        onEdit(index, editTask);
        setEditTask('');
    }

    return(
        <div>
            <h2>TaskList:</h2>
            <ul>
                {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button onClick={() => handleEditTask(index)}>Edit</button>
                    {editTask && (
                        <>
                            <input 
                                type="text"
                                value={editTask}
                                onChange={(e)=> setEditTask(e.target.value)}
                            />
                            <button onClick={() => handleUpdateTask(index)}>Update</button>
                        </>
                    )} 

                </li>
                ))}

                {tasks.map((task)=> (
                    <li key={task.id}>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
                ))}
            </ul>
        </div>
    )
}