//Create each task component

import React, {Component} from "react";
import Moment from 'react-moment';


const Checkbox = props => (
    <div>
        <input type="checkbox" {...props} />
        <span> Completed</span>
    </div>
  )

class Task extends Component {


    state = { checked: this.props.status }

    handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })

    render() {
      const timeStamp = this.props.createdTime;
      const createdTime = new Date(timeStamp.replace(' ', 'T'));

        // const initial_status = this.props.status;

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