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
      id: this.props.id
    }

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
        console.log(data)
        // window.location.reload();
      });
    }

    

    componentDidMount() {
      
    }


    render() {
      
      const timeStamp = this.props.createdTime;
      const createdTime = new Date(timeStamp.replace(' ', 'T'));

      console.log(this.state.checked)

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
                      <button type="button" className="btn btn-outline-danger btn-sm">
                          <span className="glyphicon glyphicon-minus"></span>
                      </button>
                  </span>
                </div>

              </div>

              <div className="taskSecondBlock">
                <span className="taskDescription">Description: {this.props.description}</span>
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