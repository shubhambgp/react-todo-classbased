import React from "react";

export default class Todoadd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            task : ""
        }
        this.changeData = this.changeData.bind(this);
        this.sendData = this.sendData.bind(this);
    }
    changeData(e){
        this.setState({ task : e.target.value})
    }
    sendData(e){
        e.preventDefault();
        this.props.addInList(this.state.task);
        this.setState({task : ""});
    }
    render(){
        return(
            <form onSubmit={this.sendData}>
                <input type="text" autoFocus onChange={this.changeData} className="form-control" value={this.state.task} placeholder="✍️Write your task"/>
                <button type="submit" className="btn btn-primary">Add Task</button>
                <br />
                <br />
            </form>
        )
    }
}