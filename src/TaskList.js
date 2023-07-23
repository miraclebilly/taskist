// TaskList.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function TaskList({ tasks, onEdit, deleteTask, toggleCompleted }) {
  const [editTaskName, setEditTaskName] = React.useState('');
  const [idToEdit, setIdToEdit] = React.useState(null);

  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  const handleEditTask = (taskId) => {
    const index = tasks.findIndex(task => task.id === taskId);
    setEditTaskName(tasks[index].name);
    setIdToEdit(taskId);
  };

  const handleUpdateTask = (taskId) => {
    onEdit(taskId, editTaskName);
    setEditTaskName('');
    setIdToEdit(null);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div>
      <main className="flex justify-center pt-20">
        <div className="border rounded w-1/4 ml-8 h-80 mt-4 p-4">
          <h1 className="font-bold mb-4">Pending Task</h1>
          <div className="flex flex-col space-y-2">
            {pendingTasks.map(task => (
              <div key={task.id} className="flex items-center group"> {/* Added 'group' class here */}
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompleted(task.id)}
                />
                {idToEdit === task.id ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={editTaskName}
                      onChange={(e) => setEditTaskName(e.target.value)}
                      autoFocus
                      className="border rounded p-1 mr-2 w-40"
                    />
                    <button
                      onClick={() => handleUpdateTask(task.id)}
                      className="bg-green-500 text-white px-2 py-1 rounded text-sm"
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span className="group-hover:text-blue-500 pl-3 pr-8"> {/* Added 'group-hover:text-blue-500' here */}
                      {task.name}
                    </span>
                    <button
                      onClick={() => handleEditTask(task.id)}
                      className="bg-blue-500 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity" // Added 'opacity' classes here
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity" // Added 'opacity' classes here
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
       
              {/* Completed Task */}

        <div className="border rounded w-1/4 ml-8 h-80 mt-4 p-4">
          <h1 className="font-bold mb-4">Completed Task</h1>
          <div className="flex flex-col space-y-2">
            {completedTasks.map(task => (
              <div key={task.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompleted(task.id)}
                />
                <span className="line-through">{task.name}</span>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
       

  
}
