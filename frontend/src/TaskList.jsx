//Create taskList component using Task component

import React, {Component} from "react";
import Task from "./Task.jsx";
class TaskList extends Component {
  
    render() {
        //For each Task object, decide whether to make them Task component
        //or notification component  
        const taskList = this.props.userTask.map(eachTask => (
              <Task key={eachTask.id} id= {eachTask.id} name={eachTask.name} status={eachTask.complete_status}/>
        ))
      
      return (
        <main className="tasks">
          {taskList}
        </main>
      );
    }
  }

  export default TaskList;