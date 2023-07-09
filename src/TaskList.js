import React from 'react';

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
    <div className="mt-4 flex justify-center items-center">
      <h2>TaskList:</h2>
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
                <button onClick={handleUpdateTask}>Update</button>
              </>
            ) : (
              <>
                {task}
                <button
                  onClick={() => handleEditTask(index)}
                  className="bg-blue-500 text-white rounded-md"
                >
                  Edit
                </button>
              </>
            )}

            <button
              onClick={() => handleDeleteTask(index)}
              className="bg-red-500 text-white px-2 py-1 rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
