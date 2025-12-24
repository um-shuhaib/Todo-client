import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { userLogin } from '../api/fetchApi';
import { toast } from 'react-toastify';

function Login() {

    const [userData,setData]=useState({
        username:"",password:""
    })
    console.log(userData);

    const formSubmit=()=>{
        userLogin(userData).then(res=>{
            toast("login success")
            sessionStorage.setItem("token",res.data.token)
        }).catch(res=>{
            toast("invalid credentials")
        })
        // sessionStorage.setItem("token",resizeBy.data.token)
        // getitem(),removeitem()

    }
    

  return (
    <div className='container mt-5'>
            <h1 className='m-3 text-center'>Login</h1>
            <div>
                
                <FloatingLabel controlId="floatingUsername1" label="Username" className='m-3'>
                    <Form.Control type="text" placeholder="Password" onChange={(e)=>{setData({...userData,username:e.target.value})}}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword1" label="Password" className='m-3'>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>{setData({...userData,password:e.target.value})}}/>
                </FloatingLabel>
                
                <div className='d-flex justify-content-center m-2'>
                    <button className='btn btn-primary' onClick={formSubmit}>Login</button>
                </div>
            </div>

        </div>
  )
}

export default Login