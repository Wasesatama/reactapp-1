import React from "react";

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            currDateTime:new Date(),
            tickerId: null
        }
    }

    componentDidMount(){
        console.log("componentDidMount() is called...")
        let setIntervalId = setInterval(()=> {
            this.setState ({
                currDateTime:new Date()
            })
        }, 1000);

        this.setState({
            tickerId: setIntervalId
        })
    }

    componentDidUpdate(prevState,prevProps){
        //console.log("componentDidUpdate() is called")
        console.log(this.state.tickerId)
        //console.log(prevState)
        //console.log(prevProps)
    }

    componentWillUnmount(){
        clearInterval(this.state.tickerId)
    }

    render(){
        return(
            <div>
                <h1>TaskCraft</h1>
                <p>{this.state.currDateTime.toLocaleString()}</p>
            </div>
        )
    }
}

export default Header