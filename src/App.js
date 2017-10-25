import './App.css'
import React, { Component } from 'react'
import logo                 from './images/icon.png'
import ToDoList             from './components/todo/List'


export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" />
          <h1 className="App-title">Lets ToDo This</h1>
        </header>
        <p className="App-intro">
          {"Let's get shit done ! )"}
        </p>
        <ToDoList />
      </div>
    )
  }
  
}
