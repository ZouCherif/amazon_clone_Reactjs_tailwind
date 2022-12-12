import React from "react"
import {NavBar, MainImages} from './components'
function App() {

  return (
    <div className="App relative">
      <NavBar />
      <div className="max-w-[1500px]">
        <MainImages/>
      </div>
    </div>
  )
}

export default App
