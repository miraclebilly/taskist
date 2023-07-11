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
            <form onSubmit={handleTaskSubmit}>
                <textarea 
                    placeholder="Please enter Task" 
                    name={addTask} 
                    value={addTask}              
                    onChange={handleTaskChange} 
                    className="w-full h-40 p-2 border border-gray-400"             
                >
                </textarea>
                <button type="submit" 
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Add Task
                
                </button>
            </form>
            
        </div>
    )
}