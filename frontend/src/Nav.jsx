// Create navbar component

import React, {Component} from "react";
class Nav extends Component {
    render() {
      //Current User
      const currentUser = this.props.currentUser.first_name;
      //Time
      const timeOptions = {
        timeZone: "Canada/Eastern",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        seconds: "numeric"
      };
      const date = new Date();
      const day = date.toDateString();
      const time = date.toLocaleTimeString("en-US", timeOptions);
      return (
        <nav className="navbar">
            <div className="navbarUser">
                <p className="navbar-user">Current User: {currentUser}</p>
            </div>
            <div className="navbarTime">
                <p className="navbar-time">Today is {day}   Time Now: {time}</p>
            </div>
            <div className="navbarButton">
              <button type="button" className="btn btn-outline-success btn-xs">
                <span className="glyphicon glyphicon-plus"></span>
              </button>
            </div>
        </nav>
      );
    }
  }

  export default Nav;