import React from "react";
import Header from "../components/Header";
import TodoTable from "../components/TodoTable";
import TodoForm from "../components/TodoForm";
import TodoFormFunctional from "../components/TodoForm.functional";

class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showFormModal:false,
            dataToEdit:null,
            dataToEditIndex:-1,
            modalActionMode: "",
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
            showFormModal:true,
            modalActionMode:"Add"
        })
    }

    handleCloseModal = () =>{
        this.setState({
            showFormModal:false,
            dataToEdit:null,
            dataToEditIndex:-1,
            modalActionMode:""
        })
    }

    handleFinishTodo = (index) =>{
        let newStatusTodo = [...this.state.todos]
        newStatusTodo[index].isDone = !newStatusTodo[index].isDone
        this.setState({
            todos:newStatusTodo
        })
    }

    handleBtnEditClick = (index) =>{
        let currTodos = [...this.state.todos]
        let todoEdit = currTodos [index]
        this.setState({
            dataToEdit:todoEdit,
            dataToEditIndex:index,
            showFormModal:true,
            modalActionMode:"Edit"
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

    saveEditedTodo = (todoDescription, todoDeadline) => {
        let currTodoState = [...this.state.todos]
        currTodoState[this.state.dataToEditIndex].description=todoDescription
        currTodoState[this.state.dataToEditIndex].deadline=todoDeadline
        this.setState({
            todos:currTodoState
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
                        editTodo={this.handleBtnEditClick} 
                        deleteTodo={this.deleteTodo}
                        finishTodo={this.handleFinishTodo}/>
                </div>
                <TodoFormFunctional
                    show={this.state.showFormModal} 
                    saveNewTodo={this.saveNewTodo}
                    saveEditedTodo={this.saveEditedTodo} 
                    closeModal={this.handleCloseModal}
                    todoToEdit={this.state.dataToEdit}
                    todoToEditIndex={this.state.dataToEditIndex}
                    modalMode={this.state.modalActionMode}/>
            </div>
        )
    }
}

export default Homepage;