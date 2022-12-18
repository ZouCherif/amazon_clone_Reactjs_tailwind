import React from "react"
import {NavBar, MainImages, Card, Carousel} from './components'
import {cardsData, CarouselData} from './data'

function App() {

  return (
    <div className="App bg-[#EAEDED]">
      <NavBar />
      <div className="max-w-[1500px] mx-auto relative">
        <MainImages/>
        <div className="px-4">
          <div className="grid grid-cols-4 gap-4 absolute top-[250px] pr-4">
            {cardsData.section1.map((item)=>{
              return(item.type === 1 ?
                <Card data={item}/>:
                <div>
                  <div className="bg-white p-4 mb-4">
                    <h3 className="mb-4 text-[21px] font-bold">{item.title}</h3>
                    <button className="bg-[#FFD814] w-full rounded-[8px] border-2 hover:bg-[#dbbd25] focus:border-blue-400 py-2 text-[12px] mb-[30px]">Sign in securely</button>
                  </div>
                  <img src={item.image} alt="" className="mx-auto "/>
                </div>
              )
            })}
          </div>
          <div className="mt-[530px]">
            <Carousel data={CarouselData[0]}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
