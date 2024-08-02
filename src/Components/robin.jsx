import React, { useState } from 'react' 
import './TodoApp.css' 
function TodoApp() { 
    const [list, setList] = useState([{ id: 1, task: 'Task', done: false }])
     const [task, setTask] = useState('') 
     return (<div className='container'> 
     <div className='input-section'> 
        <h2>My Todo App</h2> <input type="text" placeholder='Enter Your Task..' onChange={event => setTask(event.target.value)} /> <button className='btn-add' onClick={Add}>Add</button> </div> <div className='tasklist'> <ul> {list.map((l, i) => (<li> <span onClick={event => update(l.id)} className={l.done ? 'done' : ''}>{l.task}</span> <span onClick={event => remove(l.id)}><i className="fa-solid fa-trash"></i> </span></li>))} </ul> </div> </div>) 
        function Add() { const newobj = { id: 2, task: task, done: false }
         setList(prevlist => prevlist.concat(newobj)) } 
         function update(id) { 
            const newlist = list.map((l, i) => (l.id === id ? { ...l, done: true } : l)) 
            setList(newlist); } 
            function remove(id) { const newlist = list.filter(f => f.id !== id); 
                setList(newlist); } }
                 export default TodoApp