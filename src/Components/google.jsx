import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

class Google extends Component {
  responseGoogle = (response) => {
    console.log(response);
  };
  render() {
    return (
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        type="button"
        buttonText="Sign In with Google"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        isSignedIn="true"
        disabled="false"
        cookiePolicy={"single_host_origin"}
      />
    );
  }
}

export default Google;
