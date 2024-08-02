import React from 'react'
import './ListItem.css'

function ListItem({taskname,index,status,markAsDone,handleDelete}) {

  
  return (
    <div className='ListItems'>
      
        <h3 className='name'>{taskname}</h3>
        <button onClick={()=>handleDelete(index)}>Delete</button>
        <button onClick={()=>markAsDone(index)}>Mark as Done</button>

    </div>
  )
}

export default ListItem