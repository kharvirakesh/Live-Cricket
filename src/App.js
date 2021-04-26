import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { getMatches } from './core/api/Api.js'
import Mycard from './Components/Mycard/Mycard'


function App() {

  const [matches, setmatches] = useState([])

  useEffect(() => {
    getMatches().then((data) => setmatches(data.matches))
  }, [])

  return (
    <div>
      <Navbar></Navbar>
    
      {
        matches.map((match) => (
          <Mycard match={match} />
        ))
      }
    </div>
  )
}

export default App
