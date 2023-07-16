import React, { useEffect } from 'react';
import './App.css';
import Nav from './nav';
import TaskList from './TaskList';
import Add from './Add';

function App() {
  const [tasks, setTasks] = React.useState(null);

  useEffect(() => {
    if (tasks === null) {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      } else {
        setTasks([]);
      }
    } else {
      // Store the tasks in local storage whenever the tasks state changes
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleEditTask = (index, editedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
  };

  return (
    <div>
      <Nav />
      
      <Add onAdd={handleAddTask} />
      {tasks && 
        <TaskList 
            tasks={tasks} 
            onEdit={handleEditTask} 
            deleteTask={deleteTask} />}
    </div>
  );
}

export default App;
