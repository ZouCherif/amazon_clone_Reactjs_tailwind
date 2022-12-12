import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { images } from '../data'

function MainImages() {
  return (
    <div className="slide-container">
        <Slide>
         {images.map((image, index)=> (
            <div className="each-slide" key={index}>
              <div className='w-full h-[600px] bg-cover bg-center' style={{'backgroundImage': `url(${image.url})`}}>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  )
}

export default MainImages



