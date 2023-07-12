import React from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TodoFormFunctional(props) {
    const handleFormSubmit = (event) => {
        event.preventDefault()

        let inputTodoDescription = event.target.inputTodoDescription.value;
        let inputTodoDeadline = event.target.inputTodoDeadline.value;

        props.saveNewTodo(inputTodoDescription, inputTodoDeadline)
        props.closeModal()
    }

    return (
        <Modal show={props.show} onHide={props.closeModal}>
            <Form onSubmit={handleFormSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>What do you need to do?</Form.Label>
                        <Form.Control type="text" placeholder="e. g., makan ayam goreng" name="inputTodoDescription" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="date" name="inputTodoDeadline" />
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