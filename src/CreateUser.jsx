import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateUser() {
    
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [age,setAge]=useState()
    const navigate=useNavigate()

    const handleclick=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/createUser", {name,email,age})
        .then(result=>{console.log(result)
            navigate('/')
        })
        .catch(err=>console.log(err))

    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
    <h1>Add user</h1>
       <form onSubmit={handleclick}>
       
       <div>
        <label htmlFor="name"><b>name</b></label>
        <input type="text" placeholder='enter name'
         autoComplete='off' name='name' required
         onChange={(e)=> setName(e.target.value)}
         
         className='form-control rounded-3'/>
        
        </div>
       
       <div>
        <label htmlFor="email"><b>email</b></label>
        <input type="text" 
        onChange={(e)=>{ setEmail(e.target.value)}}
         
        placeholder='enter email' autoComplete='off' required name='email' className='form-control rounded-3'/>
        </div>
        

        <div>
          <label htmlFor="age"><b>age</b></label>
          <input type="age" 
          onChange={(e)=> setAge(e.target.value)}
          required
          placeholder='age' autoComplete='off' name='age' className='form-control rounded-3'/>
        
        </div>
        <br></br>
        <center><input type="submit" required className='btn btn-success w-100 rounded-5'/></center>
    </form>
</div>
</div>
  )
}

export default CreateUser