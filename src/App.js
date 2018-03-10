import React, { Component } from 'react';
import './App.css';

class Input extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App jumbotron">
        <h1>To-Do List</h1>
        <Input />
      </div>
    );
  }
}

export default App;
