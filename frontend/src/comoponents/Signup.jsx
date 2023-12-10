import React, { useState } from 'react'

function Signup() {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass]=useState("")

    const handleRegister=()=>{

      const payload={
        username,
        email,
        pass
      }

      //console.log(payload)

      fetch("https://calm-plum-crane-tutu.cyclic.app/users/register",{
        method:"POST",
        headers:{
          "Content-type" : "application/json"
        },
        body:JSON.stringify(payload)
      })
      .then((res)=>res.json())
      .then((data)=>console.log(data))
      .catch((error)=>console.log(error))

    }
  return (
    <div>
      <h3>Register a new User</h3>
        <input type='text' value={username} placeholder='Enter Username' onChange={(e)=>setUsername(e.target.value)} />
        <input type='text' value={email} placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
        <input type='password' value={pass} placeholder='Enter Pass' onChange={(e)=>setPass(e.target.value)} />
        <button onClick={handleRegister} >Register</button>
    </div>
  )
}

export default Signup