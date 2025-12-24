import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Routes>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
