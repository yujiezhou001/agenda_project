import React, {Component} from "react";
import axios from "axios";

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            task_name: "",
            task_description: "",
            complete_status: false,
        }
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        axios
          .post("/api/tasks", {
            task_name: this.state.task_name,
            task_description: this.state.task_description,
            complete_status: this.state.complete_status
          })
          .then(({ data }) => {
            console.log("Received from backend:", data);
          });
      }
    
      handleTaskNameInput = (e) => {
        this.setState({
          task_name: e.target.value
        });
      }
    
      handleTaskDescriptionInput = (e) => {
        this.setState({
          task_description: e.target.value
        });
      }

    render () {
        return (
            <div className="formComponent">
                <p>Please add your task below:</p>
                <form className="actualForm" onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                    <label for="inputTaskTitle">Task Title</label>
                    <input type="text" className="form-control" id="inputTaskTitle" name="task_name" placeholder="Title of the task" value={this.state.task_name} onChange={this.handleTaskNameInput}/>
                </div>
                <div className="form-group">
                    <label for="inputTaskDescription">Task Description</label>
                    <input type="text" className="form-control" id="inputTaskDescription" name="task_description" placeholder="Description of the task" value={this.state.task_description} onChange={this.handleTaskDescriptionInput}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>      
        )
    }
}

export default Form;