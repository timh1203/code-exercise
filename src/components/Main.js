import React from 'react'

import '../styles/Main.css'
import MainDisplay from './MainDisplay'

const Main = (props) => {
  return (
    <div className="Main">

      <div className="MainInputs">
        <p>Number of columns <input type="text" defaultValue={props.columns} onInput={(e) => props.changeColumns(e)} /></p>
        <p>Row height <input type="text" defaultValue={props.height} onInput={(e) => props.changeHeight(e)} />px</p>
      </div>

      <MainDisplay {...props} />
    </div>
  )
}

export default Main
