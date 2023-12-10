import React, { useEffect, useState } from 'react'

const Notes = () => {
const [notes,setNotes]=useState([])
    useEffect(()=>{
        fetch("https://calm-plum-crane-tutu.cyclic.app/notes",{
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res)=>res.json())
        .then((data)=>setNotes(data))
        .catch((err)=>console.log(err))
    },[])

  return (
    <div>
        <h3>All Notes are here.....</h3>
        {
            notes.map((item)=>{ 
                return <div key={item.id} style={{border:"2px solid black"}} >
                    <h4>Title:{item.title}</h4>
                     <p>{item.body}</p>

                </div>
              
            })
        }
    </div>
  )
}

export default Notes