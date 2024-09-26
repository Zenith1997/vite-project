import React from 'react'
import ListGroups from './components/ListGroups/ListGroups'










function App() {
  let items = ["orange", "orange", "orange", "orange", "orange", "orange"];

  return (
    <div>
    <ListGroups items={items} heading={"Cities"} /> 
    </div>
  )
}

export default App
