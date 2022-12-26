import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todos List</h3>
      


      {props.todos.length===0? <><h3 className='text-center'>No Todos to show</h3></>:
      props.todos.map((todo)=>{return<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>})
      }
     
    </div>

    //     <div className='container'>
    //   <h3 className='text-center my-3'>Todos List</h3>
    //   {props.todo.length===0? "No Todos to Display..." :
    //     props.todos.map((todo)=>{
    //       return<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
    //     })
    //   }
     
    // </div>
  )
}
