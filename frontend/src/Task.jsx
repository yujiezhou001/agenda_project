//Create each task component

import React, {Component} from "react";

const Checkbox = props => (
    <div>
        <input type="checkbox" {...props} />
        <span> Completed</span>
    </div>
  )

class Task extends Component {
    state = { status: this.props.status }

    handleCheckboxChange = event =>
    this.setState({ status: event.target.status })

    render() {

        
        return(
            <div className="task" id={this.props.id}>
            <div className="taskIdName">
            <span className="taskId">{this.props.id}</span>
            <span className="taskName">{this.props.name}</span>
            </div>
            <span className="taskStatus">
            <Checkbox
                status={true}
                onChange={this.handleCheckboxChange}
            />
            </span>
            </div>
            
        )
    }
}
export default Task;