import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className='App'>
        <h1>Users</h1>
        {this.state.users.map(user => (
          <div key={user.id}>
            {user.first_name} {user.last_name}
          </div>
        ))}
      </div>
    );
  }
}

export default App;