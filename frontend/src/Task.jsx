//Create each task component

import React, {Component} from "react";

let initial_status = this.props.status;

const Checkbox = props => (
    <div>
        <input type="checkbox" {...props} />
        <span> Completed</span>
    </div>
  )

class Task extends Component {
    
    state = { status: initial_status }

    handleCheckboxChange = event =>
    this.setState({ status: event.target.status })
    intial_status = event.target.status;

    render() {

        
        return(
            <div className="task" id={this.props.id}>
            <div className="taskIdName">
            <span className="taskId">{this.props.id}</span>
            <span className="taskName">{this.props.name}</span>
            </div>
            <span className="taskStatus">
            <Checkbox
                checked={this.state.status}
                onChange={this.handleCheckboxChange}
            />
            </span>
            </div>
            
        )
    }
}
export default Task;