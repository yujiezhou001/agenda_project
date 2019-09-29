import React, { Component } from 'react';
import Nav from "./Nav";
import TaskList from "./TaskList";

class App extends Component {
  state = { 
    users: [],
    tasks: [],
    currentUser: {
      first_name: "Yujie"
    }, 
    temporaryTasks: [
      {
        id: 1,
        task_name: "Clean the Room",
        complete_status: false
      }, {
        id: 2,
        task_name: "Do laundry",
        complete_status: false
      }
  ]
  };

  addTask = (newTask) => {
    const oldTasks = this.state.tasks;
    const tasks = [...oldTasks, newTask];
    this.setState({tasks: tasks})
  }

  deleteTask = (updatedTaskList) => {
    this.setState({tasks: updatedTaskList})
  }

  changeStatus = (updatedTaskListWithStatusChange) => {
    console.log("from front-end changeStatus function:", updatedTaskListWithStatusChange)
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      // .then(users => console.log("Is this array?", users))
      .then(users => this.setState({ users }))
    fetch('/api/tasks')
      .then(res => res.json())
      .then(tasks => this.setState({ tasks}))
  }

  render() {
    return (
      <div className='App'>
        <Nav currentUser={this.state.currentUser} addTask={this.addTask}/>
        <div className="tasksTitle">
          <h1>Your Tasks</h1>
        </div>
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} changeStatus={this.changeStatus}/>
        {/* {this.state.users.map(user => (
          <div key={user.id}>
            {user.first_name} {user.last_name}
          </div>
        ))} */}
      </div>
    );
  }
}

export default App;