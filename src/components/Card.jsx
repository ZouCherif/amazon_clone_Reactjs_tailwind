import React from 'react'

function Card(props) {
  return (
    <div className='p-2 h-[300px] w-[200px]'>
        <h3>{props.data.title}</h3>
        {/* <img src={props.img} alt="" /> */}
        <p className='cursor-pointer'>Learn more</p>
    </div>
  )
}

export default Card