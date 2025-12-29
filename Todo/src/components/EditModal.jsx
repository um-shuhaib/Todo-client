import React, { useEffect } from 'react'
import { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { obtainTodo } from '../api/fetchApi';
import { updateTodo } from '../api/fetchApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function EditModal({ id }) {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,
        'Content-type': 'application/json'
    }

    const [todo, setTodo] = useState({
        title: "", description: "", due_date: "", status: ""
    })

    useEffect(() => {
        obtainTodo(id, header).then(res => {
            setTodo(res.data)

        })
    }, [])

    const submitData = () => {
        const { title, description, due_date, status } = todo
        if (!title || !description || !due_date || !status) {
            toast("not valide")
        } else {
            updateTodo(id, header, todo).then(res => {
                console.log(res.data);
                toast("updated")
                navigate("/home")


            })
        }
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow} className='m-2'>
                Edit Todo
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className=''>
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

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={submitData}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditModal