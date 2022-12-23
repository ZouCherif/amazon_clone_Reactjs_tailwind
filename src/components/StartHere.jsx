import React from 'react'
import {button} from '../assets'

function StartHere() {
    const buttonStyle = {
        backgroundImage: `url(${button})`,
        backgroundPosition: '-10px -170px'

    }
  return (
    <div className='xs:w-full w-[100px]'>
        <button style={buttonStyle} className='bg-no-repeat h-[30px] w-full rounded-[5px] border-[1px] border-stone-400 text-[14px]'>Sign in</button>
        <p className='text-[12px] text-center mt-2 cursor-text '>New customer? <span className='text-[12px] text-blue-500 hover:underline cursor-pointer'>Start here</span></p>
    </div>
  )
}

export default StartHere