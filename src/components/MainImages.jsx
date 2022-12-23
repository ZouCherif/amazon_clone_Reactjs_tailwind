import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { images } from '../data'

function MainImages() {
  return (
    <div className='max-w-[1500px] mx-auto'>
        <Slide>
         {images.map((image, index)=> (
            <div key={index}>
              <div className='w-full md:h-[600px] xs:h-[500px] h-[300px] bg-cover bg-center' style={{'backgroundImage': `url(${image.url})`}}>
              </div>
            </div>
          ))} 
        </Slide>
    </div>
  )
}

export default MainImages



