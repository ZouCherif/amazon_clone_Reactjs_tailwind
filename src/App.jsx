import React from "react"
import {NavBar, MainImages, Card, Carousel, StartHere, Footer} from './components'
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
            <Carousel data={CarouselData[1]}/>
            <div className="grid grid-cols-4 gap-4 mb-4">
              {cardsData.section2.map((item)=>(
                <Card data={item}/>
              ))}
            </div>
            <Carousel data={CarouselData[2]}/>
            <Carousel data={CarouselData[3]}/>
            <div className="grid grid-cols-4 gap-4 mb-4">
              {cardsData.section3.map((item)=>(
                <Card data={item}/>
              ))}
            </div>
            <Carousel data={CarouselData[4]}/>
            <Carousel data={CarouselData[5]}/>
            <div className="grid grid-cols-4 gap-4 mb-4">
              {cardsData.section4.map((item)=>(
                <Card data={item}/>
              ))}
            </div>
            <Carousel data={CarouselData[6]}/>
          </div>
        </div>
      </div>
      <div className="bg-white mt-4 pt-6 pb-2">
          <hr className="mt-4 border-gray-300"/>
          <center>
            <div className="w-[220px] my-6">
              <p className="text-[13px] mb-2">See personalized recommendations</p>
              <StartHere/>
            </div>
          </center>
          <hr className="my-4 border-gray-300"/>
      </div>
      <a href="#top" className="text-white">
        <div className="bg-[#37475A] p-3 text-center hover:bg-[#445367]">
          <span className="text-[14px]">Back To Top</span>
        </div>
      </a>
      <Footer/>
    </div>
  )
}

export default App
