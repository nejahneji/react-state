import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Person from "./components/Person";
import "./App.css"
import Compteur from "./components/Compteur";

class App extends Component {
  state={show : false}
  handleshow=() => {
    this.setState({
      show:!this.state.show
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.show ? <Compteur/> : <h1>show the profile </h1>}
 <button onClick={this.handleshow}>{this.state.show ? "hide" : "show"}</button>
      </div>
    );
  }
}

export default App;
