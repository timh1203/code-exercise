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
  
  render() {
    return (
      <div className="App">
      <Navbar {...this.state} />
      <Sidebar />
      <Main />
      </div>
    )
  }
}

export default App
