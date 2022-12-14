import React from "react"
import {NavBar, MainImages, Card} from './components'
import {cardsData} from './data'
function App() {

  return (
    <div className="App relative">
      <NavBar />
      <div className="max-w-[1500px] mx-auto relative">
        <MainImages/>
        <div className="grid grid-cols-4 gap-4 absolute top-[250px] px-4">
          {cardsData.section1.map((item)=>(
            <Card data={item}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
