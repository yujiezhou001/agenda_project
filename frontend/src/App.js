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
    const tasks = this.orderTasks([...oldTasks, newTask]);
    this.setState({tasks: tasks});
  }

  deleteTask = (updatedTaskList) => {
    const tasks = this.orderTasks(updatedTaskList);
    this.setState({tasks: tasks});
  }

  changeStatus = (updatedTaskListWithStatusChange) => {
    const tasks = this.orderTasks(updatedTaskListWithStatusChange);
    this.setState({tasks: tasks});
  }

  orderTasks = (tasks) => {
    const firstSort = tasks.sort(function(a, b){return a.id - b.id});
    return firstSort.sort(function(a, b){return a.complete_status - b.complete_status});
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      // .then(users => console.log("Is this array?", users))
      .then(users => this.setState({ users }))
    fetch('/api/tasks')
      .then(res => res.json())
      .then(unorderedTasks => {
        const tasks = this.orderTasks(unorderedTasks);
        this.setState({tasks});
      })
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