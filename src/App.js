import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'



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
              <li className="list-group-item text-left">
              <i class="fas fa-dot-circle mr-2"></i>
                {task}
                <button className="btn btn-success float-right" onClick={this.props.deleteTask.bind(this, task)}><i className="fas fa-check"></i></button>
              </li>
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

  deleteTask(task) {
    let filteredArray = this.state.tasks.filter(item => item !== task)
    this.setState({tasks: filteredArray});
  }
  render() {
    return (
      <div className="App">
        <Input createTask={this.createTask} />
        <List tasks={this.state.tasks} deleteTask={this.deleteTask.bind(this)} />
      </div>
    );
  }
}

export default App;
