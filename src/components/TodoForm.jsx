import React from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleFormSubmit = (event) => {
        console.log(event)
        event.preventDefault()

        let inputTodoDescription = event.target.inputTodoDescription.value;
        let inputTodoDeadline = event.target.inputTodoDeadline.value;
        
        alert(`${inputTodoDescription} maksimal tanggal ${inputTodoDeadline}`)

        this.props.saveNewTodo(inputTodoDescription,inputTodoDeadline)
    }

    render() {
        return (
            <Modal show={this.props.show}>
                <Form onSubmit={this.handleFormSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>What do you need to do?</Form.Label>
                            <Form.Control type="text" placeholder="e. g., makan ayam goreng" name="inputTodoDescription"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control type="date" name="inputTodoDeadline"/>
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">
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
}

export default TodoForm