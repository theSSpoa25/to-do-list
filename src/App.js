import React, { Component } from 'react';
import './App.css';



class Input extends Component {
  constructor(props) {
    super(props) 

    this.handleCreate = this.handleCreate.bind(this)
  }

  handleCreate(e) {
    e.preventDefault()

    const input = this.refs.input
    const task = input.value

    console.log(task)
    this.props.createTask(task)
  }
  render() {
    return (
      <div className="jumbotron">
        <h1 className="mb-3">To-Do List</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={this.handleCreate}>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="" ref="input"/>
                </div>
              </form>
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
          <ul className="list-group">
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
        'Task 2',
      ]
    }
    this.createTask = this.createTask.bind(this)
  }

  createTask(task) {
    console.log(task)
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
  }
  render() {
    return (
      <div className="App">
        <Input createTask={this.createTask} />
        <List tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
