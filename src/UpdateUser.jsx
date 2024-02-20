import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

function UpdateUser() {
//   const {id}=useParams()

//   const [name,setName]=useState()
//   const [email,setEmail]=useState()
//   const [age,setAge]=useState()
//   const navigate=useNavigate()

//   useEffect(()=>{
//     axios.get('http://localhost:3000/getUser/'+id)
//     .then(result=>{console.log(result)
//           setName(result.data.name)
//           setEmail(result.data.email)
//           setAge(result.data.age)
          
//     })
//     .catch(err=>console.log(err))
// },[])

// const Update=(e)=>{
//   e.preventDefault();
//   axios.put("http://localhost:3000/updateUser/"+id, {name,email,age})
//   .then(result=>{console.log(result)
//       navigate('/')
//   })
//   .catch(err=>console.log(err))

// }


  return (
    
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
    <h1>Update User</h1>
       <form onSubmit={Update}>
       
       <div>
        <label htmlFor="name"><b>name</b></label>
        <input type="text" placeholder='enter name'
         autoComplete='off' name='name' required
         value={name}
         onChange={(e)=> setName(e.target.value)}
         
         className='form-control rounded-3'/>
        
        </div>
       
       <div>
        <label htmlFor="email"><b>email</b></label>
        <input type="text"
        value={email} 
        onChange={(e)=>{ setEmail(e.target.value)}}
         
        placeholder='enter email' autoComplete='off' required name='email' className='form-control rounded-3'/>
        </div>
        

        <div>
          <label htmlFor="age"><b>age</b></label>
          <input type="age"
          value={age} 
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

export default UpdateUser