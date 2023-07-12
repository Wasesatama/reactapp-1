import React from "react";
import Header from "../components/Header";
import TodoTable from "../components/TodoTable";
import TodoForm from "../components/TodoForm";

class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos:[
                {
                    description: "Makan Kelomang",
                    createdAt: "2023-11-01 14.55",
                    createdBy: "Ryan",
                    isDone: false
                },
                {
                    description: "Belajar Makan Biar Bisa Main",
                    createdAt: "2023-11-01 14.20",
                    createdBy: "Gede",
                    isDone: false
                }
            ]
        }
    }

    render () {
        return(
            <div>
                <div className="header-section">
                    <Header/>
                </div>
                <div className="todolist">
                    <TodoTable todos={this.state.todos}/>
                </div>
                <TodoForm />
            </div>
        )
    }
}

export default Homepage;