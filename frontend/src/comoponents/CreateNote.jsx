import React, { useState } from 'react'

function CreateNote() {
    
    const [title,setTitle] = useState("")
    const [body,setBody]=useState("")

    const handleSubmit=()=>{

      const payload={
       
        title,
        body
      }

      //console.log(payload)

      fetch("https://calm-plum-crane-tutu.cyclic.app/notes/create",{
        method:"POST",
        headers:{
          "Content-type" : "application/json",
          "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(payload)
      })
      .then((res)=>res.json())
      .then((data)=>console.log(data))
      .catch((error)=>console.log(error))

    }
  return (
    <div>
         <h3>Create a new note</h3>
        
        <input type='text' value={title} placeholder='Enter Title' onChange={(e)=>setTitle(e.target.value)} />
        <textarea type='password' value={body} placeholder='Type Content' onChange={(e)=>setBody(e.target.value)} />
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default CreateNote