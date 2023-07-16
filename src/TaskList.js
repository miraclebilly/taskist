import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function TaskList({ tasks, onEdit, deleteTask }) {
  const [editTask, setEditTask] = React.useState('');
  const [editIndex, setEditIndex] = React.useState(null);
  const [completedTasks, setCompletedTasks] = React.useState({});

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

  const handleToggleComplete = (index) => {
    setCompletedTasks((prevCompletedTasks) => {
      const updatedCompletedTasks = { ...prevCompletedTasks };

      if (updatedCompletedTasks[index]) {
        // If the task is already completed, mark it as not completed
        delete updatedCompletedTasks[index];
      } else {
        // If the task is not completed, mark it as completed
        updatedCompletedTasks[index] = true;
      }

      return updatedCompletedTasks;
    });
  };

  return (
    <div>
      <main className="flex">
        <div className="border rounder w-1/4 ml-8 h-80 mt-4">
          <h1>Pending Task</h1>
          <div className="mt-4 flex justify-center items-center">
            <ul>
              {tasks.map((task, index) => (
                !completedTasks[index] && (
                  <li key={index}>
                    <input
                      type="checkbox"
                      checked={completedTasks[index] || false}
                      onChange={() => handleToggleComplete(index)}
                    />
                    {editIndex === index ? (
                      <>
                        <input
                          type="text"
                          value={editTask}
                          onChange={(e) => setEditTask(e.target.value)}
                        />
                        <button onClick={handleUpdateTask}>
                          <FontAwesomeIcon icon={faCheck} />
                        </button>
                      </>
                    ) : (
                      <>
                        {task}
                        <button onClick={() => handleEditTask(index)}>
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </>
                    )}
                    <button onClick={() => handleDeleteTask(index)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>
        <div className="border rounder w-1/4 ml-8 h-80 mt-4">
          <h1>Completed Task</h1>
          <ul>
            {tasks.map((task, index) => (
              completedTasks[index] && (
                <li key={index}>{task}
                <input
                      type="checkbox"
                      checked={completedTasks[index] || true}
                      onChange={() => handleToggleComplete(index)}
                    />
                </li>
              )
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
