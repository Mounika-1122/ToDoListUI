import React, {useState} from 'react'

export default function ToDoList() {
    const [tasks, setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");
    
    function handleInputChange(event){
            setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t, newTask])
        setNewTask("");
        }   
    }
    function deleteTask(index){
            const updatedTasks=tasks.filter((_,i) =>i!==index);
            setTasks(updatedTasks)
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index], updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index], updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks)
        }
        
    }
  return (
    <div className='flex items-center flex-col m-[100px]'>
        <h1 className='font-bold text-3xl mb-3 text-white'>TO-DO-LIST</h1>
        <div>
            <input className='outline-none ml-3 border-gray-600 border-2 rounded-sm text-[#fefbf6eb] text-lg font-medium pl-2 py-[2px] bg-transparent transition ease-out duration-500 hover hover:bg-[#1773a0] ' 
                type="text"
                placeholder='Enter a task...'
                value={newTask}
                onChange={ handleInputChange}/>
                <button className='ml-3 border-gray-600 border-2 rounded-sm text-[#fefbf6eb] text-md font-bold px-3 bg-transparent transition ease-out duration-500 hover hover:bg-[#1773a0] '
                onClick={addTask}
                >Add</button>
        </div>
        <ol className=''>
            {tasks.map((task, index)=>
                <li key={index} className='p-2 m-2 flex items-center justify-center text-[#fefbf6eb] ' >
                    <span className='flex-1'>{index+1}. {task}</span>
                    <button className='ml-3   px-2  border-gray-600 border-2 rounded-sm text-[#fefbf6eb] text-lg font-sm pl-2 py-[2px] bg-transparent transition ease-out duration-500 hover hover:bg-[#1773a0] '
                    onClick={()=>deleteTask(index)}
                    >Delete</button>

                    <button className='ml-3 border-gray-600 border-2 rounded-sm text-[#fefbf6eb] text-lg font-sm pl-2 p-[2px] bg-transparent transition ease-out duration-500 hover hover:bg-[#1773a0]'
                    onClick={()=>moveTaskUp(index)}
                    >☝🏻</button>

                    <button className='ml-3 border-gray-600 border-2 rounded-sm text-[#fefbf6eb] text-lg font-sm pl-2 p-[2px] bg-transparent transition ease-out duration-500 hover hover:bg-[#1773a0]'
                    onClick={()=>moveTaskDown(index)}
                    >👇🏻</button>
                </li>
            )}
        </ol>
    </div>
  )
}
