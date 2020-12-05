import React, { Component } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./Assets/style.css";
import Google from "./google";

class SignIn extends Component {
  state = { show: false };

  onOpenBox = () => {
    this.setState({ show: true });
  };
  onCloseBox = () => {
    this.setState({ show: false });
  };

  render() {
    const { show } = this.state;
    return (
      <div>
        <button
          type="button"
          className="btn-primary m-2 join"
          onClick={this.onOpenBox}
        >
          Join Me!
        </button>
        <Modal open={show} onClose={this.onCloseBox} center>
          <div>
            <h4 className="signfont">
              <b>Sign In Now!</b>
            </h4>
            <br />
            <center>
              <input
                className="box"
                type="email"
                id="email"
                name="email"
                placeholder="Email-ID"
                required=""
              />
              <br />
              <br />
              <input
                className="box"
                type="password"
                id="pass"
                name="pass"
                placeholder="Password"
                required=""
              />
              <br /> <br />
              <button
                className="btn btn-primary btn-block"
                onClick={this.onCloseBox}
              >
                Submit
              </button>
              <br />
              <p>-------------------or--------------------</p>
              <Google />
            </center>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SignIn;
