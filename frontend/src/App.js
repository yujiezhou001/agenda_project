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
        name: "Clean the Room",
        complete_status: false
      }, {
        id: 2,
        name: "Do laundry",
        complete_status: false
      }
  ]
  };

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
    console.log("From State", this.state.users)
  }

  render() {
    return (
      <div className='App'>
        <Nav currentUser={this.state.currentUser}/>
        <div className="tasksTitle">
          <h1>Your Tasks</h1>
        </div>
        <TaskList temporaryTasks={this.state.temporaryTasks}/>
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