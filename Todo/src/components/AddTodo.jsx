import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createTodo } from '../api/fetchApi';
import { toast } from 'react-toastify';


function AddTodo() {

    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,
        'Content-type': 'application/json'
    }

    const [todo, setTodo] = useState({
        title: "", description: "", due_date: ""
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formSubmit = () => {
        const { title, description, due_date } = todo

        if (!title || !description || !due_date) {
            toast("invalid")
        } else {

            createTodo(header, todo).then(res => {
                console.log(res.date);

                handleClose()
                toast("Todo added")

            })
        }

    }

    return (
        <>
            <Button variant="primary" onClick={handleShow} className='m-2'>
                Add Todo
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className=''>
                        <FloatingLabel controlId="floatingTitle" label="Title">
                            <Form.Control type="text" placeholder="Password" className='m-2' onChange={(e) => { setTodo({ ...todo, title: e.target.value }) }} />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingDesc" label="Description">
                            <Form.Control type="text" placeholder="Password" className='m-2' onChange={(e) => { setTodo({ ...todo, description: e.target.value }) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingDue" label="Due Date">
                            <Form.Control type="Date" placeholder="Password" className='m-2' onChange={(e) => { setTodo({ ...todo, due_date: e.target.value }) }} />
                        </FloatingLabel>


                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={formSubmit}>
                        Add Todo
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default AddTodo