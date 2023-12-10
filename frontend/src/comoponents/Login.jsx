import React, { useState } from 'react'

function Login() {
    
    const [email,setEmail] = useState("")
    const [pass,setPass]=useState("")

    const handleLogin=()=>{

      const payload={
       
        email,
        pass
      }

      console.log(payload)
     // https://calm-plum-crane-tutu.cyclic.app
      fetch("https://calm-plum-crane-tutu.cyclic.app/users/login",{
        method:"POST",
        headers:{
          "Content-type" : "application/json"
        },
        body:JSON.stringify(payload)
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
    localStorage.setItem("token",data.token)
    })
      .catch((error)=>console.log(error))

    }
  return (
    <div>
         <h3>Login with your credentials</h3>
        
        <input type='text' value={email} placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
        <input type='password' value={pass} placeholder='Enter Pass' onChange={(e)=>setPass(e.target.value)} />
        <button onClick={handleLogin} >Login</button>
    </div>
  )
}

export default Login