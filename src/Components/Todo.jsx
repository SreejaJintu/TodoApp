import React from 'react'
import './Todo.css'
import  { useState } from 'react'


function Todo() {
  const [tasks,setTasks]=useState([])
  const [inputValue,setInputValue]=useState('')

  const handleInputChange=(e)=>{
      setInputValue(e.target.value)

  }
  const handleSave=()=>{

      setTasks([...tasks,inputValue])

      setInputValue('')
  }
  const handleDelete=(index)=>{
    const temp=[...tasks]
    temp.splice(index,1)
    setTasks(temp)


  }
  return (
    <div>
            <div className="Todo-container">
      <h1>ToDo App</h1>
      <div className=' top_container'>
        
        <input type='text' id='taskInput'onChange={handleInputChange} placeholder='Add a new task' value={inputValue}/>
        <button onClick={handleSave}>Add Task</button>
      </div>
      <div>
        <ul className='taskList'></ul>
        {tasks.map((ele,index)=>{return <li key={index}  className='listItem'> {index+1}.{ele}<button onClick={handleDelete}>delete</button></li>})}
        
      </div>
    </div>
    </div>
  )
}

export default Todo