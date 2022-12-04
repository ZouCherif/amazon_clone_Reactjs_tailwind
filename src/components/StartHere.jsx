import React from 'react'
import {button} from '../assets'

function StartHere() {
    const buttonStyle = {
        backgroundImage: `url(${button})`,
        backgroundPosition: '-10px -170px'

    }
  return (
    <div className='w-fit'>
        <button style={buttonStyle} className='bg-no-repeat p-[6px] w-[170px] rounded-[5px] border-[1px] border-black text-[14px]'>Sign in</button>
        <p className='text-[12px] w-fit mt-2 cursor-text'>New customer? <span className='text-[12px]  text-blue-500 hover:underline cursor-pointer'>Start here</span></p>
    </div>
  )
}

export default StartHere