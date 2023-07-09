
import React from 'react'
import './App.css';
import Nav from './nav'
import TaskList from './TaskList'
import Add from './Add'



function App() {
  const [tasks, setTasks] = React.useState([]);
 

    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
    };

    const handleEditTask= (index, editedTask) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = editedTask;
        setTasks(updatedTasks);
    }

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    

  return (
    <div>
      <Nav />
            <Add onAdd={handleAddTask}/> 
            <TaskList tasks={tasks} onEdit={handleEditTask} deleteTask={deleteTask}/> 
      
  </div>
  );
}

export default App;
