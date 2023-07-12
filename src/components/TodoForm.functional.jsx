import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TodoFormFunctional(props) {
    const [todoDescription,setTodoDescription]=useState("")
    const [todoDeadline,setTodoDeadline]=useState("")

    useEffect (() => {
        if (props.todoToEdit){
            setTodoDescription(props.todoToEdit.description)
            setTodoDeadline(props.todoToEdit.deadline)
        }
        else {
            setTodoDescription("")
            setTodoDeadline("")
        }
    }, [props]);

    const handleFormSubmit = (event) => {
        event.preventDefault()

        //let inputTodoDescription = event.target.inputTodoDescription.value; //Perlu nama karena ke Form
        //let inputTodoDeadline = event.target.inputTodoDeadline.value;

        if (props.modalMode==="Add"){
            props.saveNewTodo(todoDescription, todoDeadline)
        }
        else if (props.modalMode==="Edit"){
            props.saveEditedTodo(todoDescription, todoDeadline)
        }
        props.closeModal()
    }

    const handleInputChange = (event) => {
        let newInput = event.target.value //Gaperlu nama karena spesifik ke input
        setTodoDescription(newInput)
    }

    const handleDeadlineChange = (event) => {
        let newDeadline = event.target.value
        setTodoDeadline(newDeadline)
    }

    return (
        <Modal show={props.show} onHide={props.closeModal}>
            <Form onSubmit={handleFormSubmit}>
                <Modal.Header closeButton>
                    {
                        (props.modalMode==="Add")? (
                            <Modal.Title>Add New Task</Modal.Title>
                        ) : (
                            <Modal.Title>Edit Task</Modal.Title>
                        )
                    }
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>What do you need to do?</Form.Label>
                        <Form.Control type="text" placeholder="e. g., makan ayam goreng"
                         name="inputTodoDescription" 
                         value={todoDescription}
                         onInput={handleInputChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="date" name="inputTodoDeadline" value={todoDeadline} onInput={handleDeadlineChange}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>

    )
}

export default TodoFormFunctional