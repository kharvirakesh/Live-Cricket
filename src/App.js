import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import {getMatches}  from './core/api/Api.js'
import Mycard from './Components/Mycard/Mycard'

function App() {

 useEffect (()=> {
  getMatches()
 },[]
 )

  return (
    <div>
      <Navbar></Navbar>
      <Mycard></Mycard>
      {}
    </div>
  )
}

export default App
