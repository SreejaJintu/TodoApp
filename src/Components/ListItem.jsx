import React from 'react'
import './ListItem.css'

function ListItem({tasks,setTasks}) {

  const handleDelete = (index) => {
    var message=window.confirm('Are you sure to delete?')
    var temp1;
    if(message){
       temp1 = [...tasks]
      temp1.splice(index, 1)
      setTasks(temp1)
    }
      
  }
  const markAsDone = (index) => {
    const temp2 = [...tasks]
    temp2[index].status = !temp2[index].status
    console.log(temp2[index].status)
    setTasks(temp2)


  }
  return (

    <div className='ListItems'>
      {tasks.map((task,i)=>(
        <div key={i} className='items' >
        <h3 className={`taskname ${task.status ? 'done' : ''}` }>{i+1}.{task.text}</h3>
        <button onClick={()=>handleDelete(i)}>Delete</button>
        <button onClick={()=>markAsDone(i)}>Mark as Done</button>
</div>
      ))}
        
    </div>
  )
}

export default ListItem