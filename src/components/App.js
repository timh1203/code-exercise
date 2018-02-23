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
      columns: 5,
      height: 900,
    }
  }
  
  changeTheme = (e, color) => {
    e.preventDefault()
    this.setState({ theme: color })
  }
  
  changeColumns = (e) => {
    e.preventDefault()
    const value = Number(e.target.value)
    this.setState({ columns: value })
  }
  
  changeHeight = (e) => {
    e.preventDefault()
    const value = Number(e.target.value)
    this.setState({ height: value })
  }

  render() {
    return (
      <div className="App">
        <Navbar {...this.state} changeTheme={this.changeTheme} />
        <Sidebar {...this.state} />
        <Main {...this.state} changeColumns={this.changeColumns} changeHeight={this.changeHeight}/>
      </div>
    )
  }
}

export default App
