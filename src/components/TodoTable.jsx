import React from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

class TodoTable extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Table striped bordered hover>
            <tbody>
                {
                    this.props.todos.map((todo,index)=>{
                        return (
                            <tr>
                            <td><Form.Check type="checkbox" onClick={(event)=>this.props.finishTodo(index)}/></td>
                            {
                                todo.isDone ? (<td><s>{todo.description}</s></td>) : (<td>{todo.description}</td>)
                            }
                            <td>
                                {
                                    todo.isDone? null :(<Button variant="secondary">Edit</Button>)
                                }
                                <Button variant="danger" onClick={(event)=>this.props.deleteTodo(index)}>Delete</Button>
                            </td>
                          </tr>  
                        )
                    })
                }
                <tr>
                <td colSpan={3}>
                    <Button variant="primary" onClick={this.props.btnClick}>Add New Task</Button>
                </td>
                </tr>  
            </tbody>
          </Table>
        )
    }
}

export default TodoTable