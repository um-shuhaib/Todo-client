import React, { useEffect, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { obtainTodo, updateTodo } from '../api/fetchApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function UpdateTodo() {

    const navigate = useNavigate()

    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,
        'Content-type': 'application/json'
    }

    const [todo, setTodo] = useState({
        title: "", description: "", due_date: "", status: ""
    })

    const { id } = useParams()

    useEffect(() => {
        obtainTodo(id, header).then(res => {
            setTodo(res.data)


        })
    }, [])
    const submitData = () => {
        updateTodo(id, header, todo).then(res => {
            console.log(res.data);
            toast("updated")
            navigate("/home")


        })
    }



    return (
        <div className='container mt-5'>
            <h1 className='text-center'>Update</h1>
            <div>
                <FloatingLabel controlId="floatingTitle" label="Title">
                    <Form.Control type="text" placeholder="Password" className='m-2' value={todo.title} onChange={(e) => { setTodo({ ...todo, title: e.target.value }) }} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingDesc" label="Description">
                    <Form.Control type="text" placeholder="Password" className='m-2' value={todo.description} onChange={(e) => { setTodo({ ...todo, description: e.target.value }) }} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingDue" label="Due Date">
                    <Form.Control type="Date" placeholder="Password" className='m-2' value={todo.due_date} onChange={(e) => { setTodo({ ...todo, due_date: e.target.value }) }} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingSelect" label="Status">
                    <Form.Select aria-label="Floating label select example" value={todo.status || ""} onChange={(e) => { setTodo({ ...todo, status: e.target.value }) }}>
                        <option value="">Select status</option>
                        <option value="pending">Pending</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </Form.Select>
                </FloatingLabel>
            </div>
            <div className='d-flex justify-content-center m-2'>
                <button className='btn btn-primary' onClick={submitData} >Update</button>
            </div>
        </div>
    )
}

export default UpdateTodo