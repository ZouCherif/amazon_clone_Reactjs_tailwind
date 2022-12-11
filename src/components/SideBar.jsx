import React from 'react'
import {cart} from '../assets'
import { sideBar } from '../data'
import { IoIosArrowForward } from "react-icons/io";

export const SideBar = (props) => {
  const profilIconStyle = {
    backgroundImage: `url(${cart})`,
    backgroundPosition: '-137px -340px',
    backgroundSize: '350px'
  }
  const [isShown, setIsShown] = React.useState(false)

  return (
    <div className={`z-20 absolute h-screen w-[350px] bg-white ${props.isOpen? 'translate-x-0' :'-translate-x-full'} ease-in-out duration-500 top-0 left-0`}>
      <div className='cursor-pointer flex bg-[#232f3e] text-white h-[6.5%] p-2'>
        <div className="w-[30px] h-[30px]"></div>
        <p className='text-[19px] font-[700]'>Hello, Sign in</p>
      </div>
      <div className='h-[93.5%] overflow-scroll'>
        {sideBar.map((item)=>(
          <div>
            <h2 className='font-bold pl-8 pt-4 pb-2'>{item.title}</h2>
            {item.childs.map((child)=>(
              <div>{typeof child === 'string'?
               <div className='flex justify-between px-6 py-[10px] hover:bg-gray-200 cursor-pointer text-[14px]'>{child} <IoIosArrowForward className='text-gray-500' size={20}/></div> :
               (<div>
                {isShown && <hr className='w-[85%] mx-auto mb-1'/>}
                {isShown && child.childs.map((item)=>(
                  <div className='flex justify-between px-6 py-[10px] hover:bg-gray-200 cursor-pointer text-[14px]'>{item} <IoIosArrowForward className='text-gray-500' size={20}/></div>
                  ))}
                <h3 className='flex justify-between px-6 py-[10px] hover:bg-gray-200 cursor-pointer text-[14px]' onClick={()=>setIsShown(!isShown)}>{child.name}<IoIosArrowForward className='text-gray-500' size={20}/></h3>
               </div>
               )}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}