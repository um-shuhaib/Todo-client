import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteTodo, getTodo } from '../api/fetchApi'
import AddTodo from './AddTodo'
import { toast } from 'react-toastify'
import EditModal from './EditModal'

function Home() {

    const [todo,setTodo]=useState([])

    const header ={
        "Authorization":`token ${sessionStorage.getItem("token")}`,
        'Content-type':'application/json'
    } 
    useEffect(()=>{
        getTodo(header).then((res)=>{
            console.log(res.data);
            setTodo(res.data)
            
            
            
        })
    },[])

    const deleteData=(id)=>{
        deleteTodo(header,id).then(res=>{
            toast("deleted")
        })

    }
    

  return (
    <div>
        <div className='container mt-5'>
            <AddTodo/>
            
            <table className='table table-bordered table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th>Description</th>
                        <th>Added Date</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>{

                    todo.length > 0 ?

                    todo.map((res)=>(
                        <tr>
                        <td>{res.title}</td>
                        <td>{res.description}</td>
                        <td>{res.added_date}</td>
                        <td>{res.due_date}</td>
                        <td>{res.status}</td>
                        <td>
                            <Link to={`/update/${res.id}`} className='btn btn-primary  m-2'>Update</Link>
                            <EditModal id={res.id}/>
                            
                            <button onClick={()=>{deleteData(res.id)}} className='btn btn-danger m-2'>Delete</button>
                        </td>
                    </tr>

                    ))


                    

                    : <td>no data</td>
                }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home