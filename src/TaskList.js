import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrash, faCheck} from '@fortawesome/free-solid-svg-icons';

export default function TaskList({ tasks, onEdit, deleteTask }) {
  const [editTask, setEditTask] = React.useState('');
  const [editIndex, setEditIndex] = React.useState(null);

  const handleEditTask = (index) => {
    setEditTask(tasks[index]);
    setEditIndex(index);
  };

  const handleUpdateTask = () => {
    onEdit(editIndex, editTask);
    setEditTask('');
    setEditIndex(null);
  };

  const handleDeleteTask = (index) => {
      deleteTask(index);
  };

  return (
    <div>
        <div className="mt-4 flex justify-center items-center ">
            
            <ul>
                {tasks.map((task, index) => (
                <li key={index}>
                    {editIndex === index ? (
                    <>
                        <input
                        type="text"
                        value={editTask}
                        onChange={(e) => setEditTask(e.target.value)}
                        />
                        <button onClick={handleUpdateTask}>                         
                        <FontAwesomeIcon icon={faCheck}/>                        
                        </button>
                    </>
                    ) : (
                    <>
                        {task}
                        <button
                        onClick={() => handleEditTask(index)}>
                        <FontAwesomeIcon icon={faEdit}/>
                        </button>
                    </>
                    )}

                    <button
                    onClick={() => handleDeleteTask(index)}>
                    <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </li>
                ))}
            </ul>
      
        </div>
        <main className="flex">
            <div className ="border rounder  w-1/4 ml-8 h-80 mt-4" >
                <h1>Pending Task</h1>
            </div>
            <div className ="border rounder  w-1/4 ml-8 h-80 mt-4" >
                <h1>Completed Task</h1>
            </div>
        </main>
    </div>
  );
}
