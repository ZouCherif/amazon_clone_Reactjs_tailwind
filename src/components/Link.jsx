import React from 'react'

function Link(props) {
  return (
    <div className='leading-3 w-[75px] hover:underline cursor-pointer'>
        <h4 className='text-[11px] '>{props.data.title}</h4>
        <p className='text-[10px] text-gray-400'>{props.data.subtitle}</p>
    </div>
  )
}

export default Link