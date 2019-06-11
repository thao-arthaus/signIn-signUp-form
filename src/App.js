import React, { Component } from "react";
import SignInForm from "./SignInForm";
import SignUpFrom from "./SignUpForm";
import Overlay from "./Overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

class App extends Component {
  state = {
    signIn: true
  };
  toggleFormHandle = () => {
    this.setState({
      signIn: !this.state.signIn
    });
  };
  render() {
    const { signIn } = this.state;
    let greeting, msg, signBtn, formMsg;
    if (this.state.signIn) {
      formMsg = "Sign in";
      greeting = "Hello Friend!";
      msg = "Let start your journey with us";
      signBtn = "Sign up";
    } else {
      formMsg = "Sign up";
      greeting = "Welcome Back!";
      msg = "Log in your account";
      signBtn = "Sign in";
    }

    const textBtn = this.state.signIn ? "Sign in" : "Sign up";
    return (
      <div className="App">
        <div
          style={
            signIn ? { order: 1 } : { order: 2, borderRadius: "0 10px  10px 0" }
          }
          className="app-item form-area"
        >
          <div className="content-wrapper">
            <h1 className="main-heading form-heading">{formMsg}</h1>
            <ul className="social-link-wrapper">
              <li className="social-link">
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
              <li className="social-link">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </li>
              <li className="social-link">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </li>
            </ul>
            {this.state.signIn ? <SignInForm /> : <SignUpFrom />}
            <div class="submitBtn btn">{textBtn}</div>
          </div>
        </div>
        <div
          style={
            signIn ? { order: 2 } : { order: 1, borderRadius: "10px 0 0 10px" }
          }
          class="app-item overlay-area"
        >
          <div className="content-wrapper">
            <Overlay
              greeting={greeting}
              msg={msg}
              signBtn={signBtn}
              click={this.toggleFormHandle}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
