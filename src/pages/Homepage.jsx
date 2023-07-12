import React from "react";
import Header from "../components/Header";
import TodoTable from "../components/TodoTable";
import TodoForm from "../components/TodoForm";

class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showAddToDoModal:false,
            todos:[
                {
                    description: "Makan Kelomang",
                    deadline: "2023-11-01 14.55",
                    createdBy: "Ryan",
                    isDone: false
                },
                {
                    description: "Belajar Makan Biar Bisa Main",
                    deadline: "2023-11-01 14.20",
                    createdBy: "Gede",
                    isDone: false
                }
            ]
        }
    }

    handleBtnAddTodoClick = () => {
        this.setState({
            showAddToDoModal:true
        })
    }

    saveNewTodo = (todoDescription, todoDeadline) => {
        let newTodo = {
            description: todoDescription,
            deadline: todoDeadline,
            createdBy: "Aryo",
            isDone:false
        }
        let newTodoState = [...this.state.todos,newTodo]
        this.setState({
            todos:newTodoState
        })
    }

    render () {
        return(
            <div>
                <div className="header-section">
                    <Header/>
                </div>
                <div className="todolist">
                    <TodoTable todos={this.state.todos} btnClick={this.handleBtnAddTodoClick}/>
                </div>
                <TodoForm show={this.state.showAddToDoModal} saveNewTodo={this.saveNewTodo}/>
            </div>
        )
    }
}

export default Homepage;