import React from 'react'


export default function Add({onAdd}) {
    const [addTask, setAddTask] = React.useState('')
    
    

    function handleTaskSubmit(e){
        e.preventDefault()
       onAdd(addTask)
       setAddTask('');
    }

    const handleTaskChange = (e) => {
        setAddTask(e.target.value)
    }


    
    return(
        <div className="flex justify-center items-top mt-8">
            <form onSubmit={handleTaskSubmit} className="flex">
                <input 
                    type="text"
                    placeholder="Please enter Task" 
                    name={addTask} 
                    value={addTask}              
                    onChange={handleTaskChange} 
                    className="h-10 p-2 border border-gray-400"             
                >
                </input>
                <button type="submit" 
                    className="add-button"
                >
                    Add Task
                
                </button>
            </form>
            
        </div>
    )
}