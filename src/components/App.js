import React, { Component } from 'react'

import '../styles/App.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Sidebar />
      <Main />
      </div>
    )
  }
}

export default App
