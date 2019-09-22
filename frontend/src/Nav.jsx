// Create navbar component

import React, {Component} from "react";
import Modal from 'react-awesome-modal';
import Form from "./Form";

class Nav extends Component {

    constructor(props) {
      super(props);
      this.state = {
          visible : false
      }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

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
              <button type="button" value="Open" className="btn btn-outline-success btn-xs" onClick={() => this.openModal()}>
                <span className="glyphicon glyphicon-plus"></span>
              </button>
            </div>
            <section className="popupComponent">
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className="formAndCloseLink">
                      <Form/>
                      <a className="closelink" href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        </nav>
      );
    }
  }

  export default Nav;