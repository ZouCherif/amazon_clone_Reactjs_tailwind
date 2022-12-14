import React from 'react'

function Card(props) {
  return (
    <div className='p-4 h-auto w-auto border-black border-2 bg-white'>
        <h3 className='mb-2 text-[21px] font-bold'>{props.data.title}</h3>
        <div className={props.data.images.length != 1? 'grid grid-cols-2 gap-1': ''}>
            {props.data.images.map((pic)=>(
                <img src={pic} alt="" className='cursor-pointer mb-4'/> 
            ))}
        </div>
        <p className='cursor-pointer text-[14px] hover:underline hover:text-[#c29d40]'>Learn more</p>
    </div>
  )
}

export default Card