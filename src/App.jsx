import React from "react"
import {NavBar, MainImages, Card} from './components'
import {cardsData} from './data'
function App() {

  return (
    <div className="App bg-[#EAEDED]">
      <NavBar />
      <div className="max-w-[1500px] mx-auto relative">
        <MainImages/>
        <div className="px-4">
          <div className="grid grid-cols-4 gap-4 absolute top-[250px] pr-4">
            <div className="border-2 border-black order-1">

            </div>
            {cardsData.section1.map((item)=>(
              <Card data={item}/>
            ))}
          </div>
          <div className="w-full h-[200px]">

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
