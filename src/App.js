import React, { useEffect } from 'react';
import './App.css';
import Nav from './nav';
import TaskList from './TaskList';
import Add from './Add';

const getRandomizedNumber = () => (new Date()).getMilliseconds() * Math.round(Math.random() * 10000);

function App() {
  const [tasks, setTasks] = React.useState(null);
  // [ { name: "Sleep", completed: false, id:  }, ... ]

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

  const handleAddTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false, id: getRandomizedNumber() }]);
  };

  const handleEditTask = (id, editedTaskName) => {
    const index =  tasks.findIndex(task => task.id === id);
    const task = tasks[index];
    task.name = editedTaskName
    //const updatedTasks = [...tasks];
    //updatedTasks[index] = originalTask;
    //setTasks(updatedTasks);

    setTasks([...tasks.slice(0, index), task, ...tasks.slice(index + 1)])
  };

  const deleteTask = (id) => {
    const index =  tasks.findIndex(task => task.id === id);
    setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
    // setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)])
  };

  const toggleCompleted = (id) => {
    const index = tasks.findIndex(task => task.id === id);
    const task = tasks[index];
    task.completed = !task.completed;
    setTasks([...tasks.slice(0, index), task, ...tasks.slice(index + 1)])
  }

  return (
    <div>
      <Nav />
      
      <Add onAdd={handleAddTask} />
      {tasks && 
        <TaskList 
            tasks={tasks} 
            onEdit={handleEditTask}
            toggleCompleted={toggleCompleted} 
            deleteTask={deleteTask} />}
    </div>
  );
}

export default App;
