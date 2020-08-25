import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import FireContext from "./fire/FireContext";
import FireClass from "./fire/FireClass";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isSignedIn: false };
  }
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: true });
    });
  };

  fireContextStore = {
    fireContent: new FireClass(),
  };
  render() {
    const text = !this.state.isSignedIn ? (
      <p>Not Signed</p>
    ) : (
      <p>{`Signed in :)`}</p>
    );
    return (
      <FireContext.Provider>
        <div className="App">
          <div>{text}</div>
        </div>
      </FireContext.Provider>
    );
  }
}

export default App;
