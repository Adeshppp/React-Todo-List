import React from 'react'
import { useState } from 'react';

export const AddTodo = (props,todo, onAdd) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        // if(title){
        //     alert("Title can not be blank")
        // }
        // props.addTodo(title,desc);
        {!title ? alert("Title can not be blank"):
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
    }
    }

    return (
        <div className='text-center container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-1">
                    <label htmlFor="title" className="form-label">Task</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-1 " >
                    <label htmlFor="desc" className="form-label">Task Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-success btn-sm" >Add Todo</button>
            </form>
        </div>
    )
}


//  onChange={(e)=>{setTitle(e.target.value)}} ................ proprty to accept text  value