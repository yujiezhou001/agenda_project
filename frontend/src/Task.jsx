//Create each task component

import React, {Component} from "react";
import Moment from 'react-moment';
import axios from "axios";


const Checkbox = props => (
    <div>
        <input type="checkbox" {...props} />
        <span> Completed</span>
    </div>
  )

class Task extends Component {


    state = {
      checked: this.props.status,
      id: this.props.id,
      taskName: "",
      taskDescription: ""
    }

    //handle the checkbox of every task
    handleCheckboxChange = event => {
      this.setState({ checked: event.target.checked })
      // Since the state is downloaded before state changed and stay like that after the state is updated. 
      // Directly pass the updated status to the backend
      const complete_status = event.target.checked;
      const taskId = this.state.id;

      axios
      .post("/api/tasks", {
        taskId: taskId,
        complete_status: complete_status,
        type: "status"
      })
      .then(({ data }) => {
        console.log(`You have updated your task ${taskId} complete status to ${data.newStatus}`);
        this.props.changeStatus(data.tasks)
      });
    }

    //handle the delete button of every task
    handleOnClick = () => {
        const taskId = this.state.id;
  
        axios
        .post("/api/tasks", {
          taskIdforDelete: taskId,
          type: "delete"
        })
        .then(({ data }) => {
          this.props.deleteTask(data);
          alert(`You have deleted task id${taskId}`)
        });
      }

    handleOnTaskName = (e) => {
      this.setState({
        taskName: e.target.value
      });
    }

    handleOnTaskDescription = (e) => {
      this.setState({
        taskDescription: e.target.value
      });
    }

    handleKeyDownDescription = (event) => {

      if (event.key === "Enter"){
        this.props.changeUserName(this.state.username);
        event.target.value ='';
        this.setState({username: ''})
      }
    }


    componentDidMount() {
      // const input = document.querySelectorAll('input');
      //   for(let i=0; i<input.length; i++){
      //     input[i].setAttribute('size',input[i].getAttribute('placeholder').length);
      //   }
    }


    render() {
      
      const timeStamp = this.props.createdTime;
      const createdTime = new Date(timeStamp.replace(' ', 'T'));

      // console.log(this.state.checked)

      

      // const response = fetch("/api/tasks", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     taskId: taskId,
      //     taskStatus: taskStatus,
      //     type: "status"
      //   })
      // })

      // console.log(JSON.parse(response))

        return(
            <div className="task" id={this.props.id}>

              <div className="taskFirstBlock">

                <div className="taskIdName">
                  <span className="taskId">{this.props.id}</span>
                  <span className="taskName">{this.props.name}</span>
                </div>

                <div className="checkboxButton">
                  <span className="taskStatus">
                    <Checkbox
                      checked={this.state.checked}
                      onChange={this.handleCheckboxChange}
                    />
                  </span>
                  <span className="deleteButton">
                      <button type="button" onClick={this.handleOnClick} className="btn btn-outline-danger btn-sm">
                          <span className="glyphicon glyphicon-minus"></span>
                      </button>
                  </span>
                </div>

              </div>

              <div className="taskSecondBlock">
                <input 
                  className="taskDescription" 
                  type="text" 
                  placeholder={this.props.description} 
                  name="taskDescription" 
                  value={this.state.taskDescription}
                  onChange={this.handleOnTaskDescription} 
                  size={this.props.description.length}
                />
              </div>

              <div className="taskThirdBlock">
                <span className="taskCreatedTime">
                  Created at: <Moment fromNow>{createdTime}</Moment>
                </span>
              </div>

            </div>
            
        )
    }
}
export default Task;