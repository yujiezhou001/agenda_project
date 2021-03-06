//Create taskList component using Task component

import React, {Component} from "react";
import Task from "./Task.jsx";
class TaskList extends Component {
  
    render() {
        //For each Task object, decide whether to make them Task component
        //or notification component  
        const taskList = this.props.tasks.map(eachTask => (
              <Task key={eachTask.id} id= {eachTask.id} name={eachTask.task_name} description={eachTask.task_description} status={eachTask.complete_status} createdTime={eachTask.updated_at} deleteTask={this.props.deleteTask} changeStatus={this.props.changeStatus}/>
        ))
      
      return (
        <main className="tasks">
          {taskList}
        </main>
      );
    }
  }

  export default TaskList;