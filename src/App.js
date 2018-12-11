import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'test' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        window.open('./components/App2',"_self");
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to FamiltList
          </p>
          <label>your name: <input type="text" name="name" /></label>
                <label>your password: <input type="text" name="pass" /></label>
                <input type="submit" value="Next" onClick={this.handleSubmit} />
        </header>
      </div>
    );
  }
}

export default App;
