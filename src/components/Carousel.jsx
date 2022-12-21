import React from 'react'

function Carousel(props) {
  return (
    <div className='carousel p-4 bg-white mb-4'>
        <h3 className='font-bold text-[20px] mb-2'>{props.data.title}</h3>
        <div className='flex p-2 overflow-auto'>
            {props.data.urls.map((url)=>(
                <img src={url} alt="" className='mr-6 cursor-pointer'/>
            ))}
        </div>
    </div>
  )
}

export default Carousel