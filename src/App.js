import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import {getMatches}  from './core/api/Api.js'
import Mycard from './Components/Mycard/Mycard'
import Card from './Components/Mycard/Card.js'

function App() {

 useEffect (()=> {
  getMatches()
 },[]
 )

  return (
    <div>
      <Navbar></Navbar>
      <Mycard></Mycard>
      <Card></Card>
    </div>
  )
}

export default App
