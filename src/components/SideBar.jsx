import React from 'react'
import {cart} from '../assets'
import { sideBar } from '../data'

export const SideBar = (props) => {
  const profilIconStyle = {
    backgroundImage: `url(${cart})`,
    backgroundPosition: '-137px -340px',
    backgroundSize: '350px'
  }

  return (
    <div className={`z-20 absolute h-screen w-[350px] bg-white ${props.isOpen? 'translate-x-0' :'-translate-x-full'} ease-in-out duration-500 top-0 left-0`}>
      <div className='cursor-pointer flex bg-[#232f3e] text-white h-[6.5%] p-2'>
        <div className="w-[30px] h-[30px]"></div>
        <p className='text-[19px] font-[700]'>Hello, Sign in</p>
      </div>
      <div className='h-[93.5%] overflow-scroll'>
        {sideBar.map((item)=>(
          <div>
            <h2 className='font-bold'>{item.title}</h2>
            {item.childs.map((child)=>(
              <div>{typeof child === 'string'? child:
               (<div>
                {child.childs.map((item)=>(
                  <div>{item}</div>
                  ))}
                <h3>{child.name}</h3>
               </div>
               )}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}