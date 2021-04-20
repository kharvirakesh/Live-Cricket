import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {getMatches} from '../src/core/api/Api.js'
import Mycard from './Components/Mycard/Mycard'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Mycard></Mycard>
    </div>
  )
}

export default App
