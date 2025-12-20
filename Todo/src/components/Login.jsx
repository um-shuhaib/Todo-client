import React from 'react'

function Login() {
  return (
    <div className='container mt-5'>
            <h1 className='m-3 text-center'>Register</h1>
            <div>
                
                <FloatingLabel controlId="floatingPassword" label="Username" className='m-3'>
                    <Form.Control type="text" placeholder="Password" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className='m-3'>
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                
                <div className='d-flex justify-content-center m-2'>
                    <button className='btn btn-primary'>Login</button>
                </div>
            </div>

        </div>
  )
}

export default Login