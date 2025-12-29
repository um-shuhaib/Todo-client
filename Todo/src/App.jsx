import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify'
import Home from './components/Home'
import AddTodo from './components/AddTodo'
import UpdateTodo from './components/UpdateTodo'

function App() {

  return (
    <>
      <Routes>
        <Route path='register' element={<Register/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='update/:id' element={<UpdateTodo/>}/>

      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
