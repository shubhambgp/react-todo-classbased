import React from "react";
import Todoadd from "./Todoadd";
import {Table} from "react-bootstrap";
import "./Style.css"

export default class Todoshow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taskList : []
        }
        this.addTask = this.addTask.bind(this);
        this.completeTask = this.completeTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    addTask(value){
        this.setState({taskList : [...this.state.taskList, {
            title : value,
            status : 'active'
        }]})
    }

    deleteTask(id){
        var filterTask = this.state.taskList.filter((currentTask,index)=> {
            return index !== id;
        });
        this.setState({taskList : filterTask});
    }

    completeTask(id){
        var filterTask = this.state.taskList.filter((currentTask,index)=> {
            if(index === id){
                return currentTask.status = "Completed";
            }else{
                return currentTask;
            }
        });
        this.setState({taskList : filterTask});
    }
    
    render(){
        return(
            <div className="container-fluid">
                <h1>Todo List</h1>
                <Todoadd addInList={this.addTask}/>
                <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>Task Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.taskList.length ? this.state.taskList.map((task, id) => {
                        return (
                            <tr key={id}>
                                <td>{id + 1}</td>
                                <td className={task.status === 'active' ? "" : "task-completed"}>{task.title}</td>
                                <td>
                                    <button onClick={()=> this.completeTask(id)} className="btn btn-success mr-2">Completed 👍</button>
                                    <button onClick={()=> this.deleteTask(id)} className="btn btn-danger">Delete 🗑️</button>
                                </td>
                            </tr>
                        )
                    }) : "No Task added"}
                </tbody>
            </Table>
            </div>
        )
    }
}
