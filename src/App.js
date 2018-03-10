import React, { Component } from 'react';
import './App.css';



class Input extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="mb-3">To-Do List</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class List extends Component {
  render() {
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
          <ul class="list-group">
            {this.props.tasks.map(task =>
              <li className="list-group">{task}</li>
            )}
          </ul>
          </div>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        'Task 1',
        'Task 2'
      ]

    }
  }
  render() {
    return (
      <div className="App">
        <Input />
        <List tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
