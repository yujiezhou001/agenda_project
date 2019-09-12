//Create each task component

import React, {Component} from "react";
class Task extends Component {
  
    render() {
        return(
            <div className="task" id={this.props.id}>
            <span className="taskId">{this.props.id}</span>
            <span className="taskName">{this.props.name}</span>
            <span className="taskStatus">{this.props.status}</span>
            </div>
        )
    }
}
export default Task;