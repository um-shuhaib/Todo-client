import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { userRegister } from '../api/fetchApi';
import {toast} from 'react-toastify'
import  {useNavigate}  from 'react-router-dom';

function Register() {
    const navigate=useNavigate()
    
    const [userregister,setUser]=useState({
        username:"",password:"",email:""
    })
    console.log(userregister);
    
    const formSubmit=()=>{
        const {username,password,email} = userregister 
        if (!username || !password || !email){
            toast("invalid")
        }else{
            userRegister(userregister).then(res=>{
                console.log(res.data);
                
                toast("registered")
                navigate('/login')
            })
        }
    }



    return (
        <div className='container mt-5'>
            <h1 className='m-3 text-center'>Register</h1>
            <div>
                
                <FloatingLabel controlId="floatingUsername" label="Username" className='m-3'>
                    <Form.Control type="text" placeholder="Password" onChange={(e)=>{setUser({...userregister,username:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className='m-3'>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>{setUser({...userregister,password:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingEmail" label="Email" className='m-3'>
                    <Form.Control type="email" placeholder="Password" onChange={(e)=>{setUser({...userregister,email:e.target.value})}} />
                </FloatingLabel>
                <div className='d-flex justify-content-center m-2'>
                    <button className='btn btn-primary' onClick={formSubmit}>Register</button>
                </div>
            </div>

        </div>
    )
}

export default Register