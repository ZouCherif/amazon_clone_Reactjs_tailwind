import React from 'react'

function Card(props) {
  const bool = props.data.images.length != 1? true : false
  return (
    <div className={`p-4 h-auto w-auto border-2 bg-white`}>
        <h3 className='mb-2 text-[21px] font-bold'>{props.data.title}</h3>
        <div className={bool? 'grid grid-cols-2 gap-1': ''}>
            {props.data.images.map((pic)=>(
              <div className={`${!bool? "h-[310px]": "w-[153px] h-[128px]"}`}>
                <img src={pic} alt="" className={`cursor-pointer mb-4 mx-auto ${!bool? 'h-full': ''}`}/> 
                {bool && <p></p>}
              </div>
            ))}
        </div>
        <p className='cursor-pointer text-[14px] hover:underline hover:text-[#c29d40] my-2 '>Learn more</p>
    </div>
  )
}

export default Card