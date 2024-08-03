import React from 'react'
import './Todo.css'
import { useState } from 'react'
import ListItem from './ListItem'


function Todo() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)

  }
  const handleSave = () => {

    setTasks([...tasks, { text:inputValue, status:false }]);

    setInputValue('')
  }

  return (

    <div className="Todo-container">
      <h1>ToDo App</h1>
      <div className=' top_container'>

        <input type='text' id='taskInput' onChange={handleInputChange} placeholder='Add a new task' value={inputValue} />
        <button onClick={handleSave}>Add Task</button>
      </div>
      <div className=' bottom_container'>

        
           <ListItem tasks={tasks} setTasks={setTasks} /> 
      

      </div>




    </div>

  )
}

export default Todo


//         <ul className='taskList'></ul>
//{tasks.map((ele,index)=>{return <li key={index}  className='listItem'> {index+1}.{ele}<button onClick={handleDelete}>delete</button></li>})