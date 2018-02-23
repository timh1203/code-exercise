import React, { Component } from 'react'

import '../styles/App.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Main from './Main'

class App extends Component {
  constructor() {
    super()
    this.state = {
      theme: "green",
    }
  }
  
  changeTheme = (e, color) => {
    e.preventDefault()
    this.setState({ theme: color })
  }

  render() {
    return (
      <div className="App">
      <Navbar {...this.state} changeTheme={this.changeTheme} />
      <Sidebar {...this.state} />
      <Main />
      </div>
    )
  }
}

export default App
