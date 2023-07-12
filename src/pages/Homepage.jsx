import React from "react";
import Header from "../components/Header";
import TodoTable from "../components/TodoTable";
import TodoForm from "../components/TodoForm";
import TodoFormFunctional from "../components/TodoForm.functional";

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

    handleCloseModal = () =>{
        this.setState({
            showAddToDoModal:false
        })
    }

    handleFinishTodo = (index) =>{
        let newStatusTodo = [...this.state.todos]
        newStatusTodo[index].isDone = !newStatusTodo[index].isDone
        this.setState({
            todos:newStatusTodo
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

    deleteTodo = (index) => {
        let currTodoState = [...this.state.todos]
        currTodoState.splice(index,1);
        this.setState({
            todos:currTodoState
        })
    }

    render () {
        return(
            <div>
                <div className="header-section">
                    <Header/>
                </div>
                <div className="todolist">
                    <TodoTable 
                        todos={this.state.todos} 
                        btnClick={this.handleBtnAddTodoClick} 
                        deleteTodo={this.deleteTodo}
                        finishTodo={this.handleFinishTodo}/>
                </div>
                <TodoFormFunctional
                    show={this.state.showAddToDoModal} 
                    saveNewTodo={this.saveNewTodo} 
                    closeModal={this.handleCloseModal}/>
            </div>
        )
    }
}

export default Homepage;