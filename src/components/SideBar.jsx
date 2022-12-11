import React from 'react'
import { SideBarContent1, SideBarContent2, SideBarContent3 } from '../data'
import { IoIosArrowForward } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import {flag} from '../assets'
import { cart } from '../assets';

export const SideBar = (props) => {
  const profilIconStyle = {
    backgroundImage: `url(${cart})`,
    backgroundPosition: '-137px -340px',
    backgroundSize: '350px'
  }
  const [isShown1, setIsShown1] = React.useState(false)
  const [isShown2, setIsShown2] = React.useState(false)

  return (
    <div className={`z-20 absolute h-screen w-[350px] bg-white ${props.isOpen? 'translate-x-0' :'-translate-x-full'} ease-in-out duration-500 top-0 left-0`}>
      <div className='cursor-pointer flex bg-[#232f3e] text-white h-[6.5%] p-2'>
        <div className="w-[25px] h-[25px] ml-6 mr-2 mt-[2px]" style={profilIconStyle}></div>
        <p className='text-[19px] font-[700]'>Hello, Sign in</p>
      </div>
      <div className='h-[93.5%] overflow-scroll'>
        <div>
          <h2 className='font-bold text-[18px] pl-8 pt-4 pb-2'>{SideBarContent1.title}</h2>
          {SideBarContent1.childs.map((child)=>(
            <div className='flex justify-between pl-8 pr-6 py-[10px] hover:bg-gray-200 cursor-pointer text-[14px]'>{child} <IoIosArrowForward className='text-gray-500' size={20}/></div>)
          )}
        </div>
        <hr className='mt-1 border-t-[1px]'/>
        <div>
          <h2 className='font-bold text-[18px] pl-8 pt-4 pb-2'>{SideBarContent2.title}</h2>
          {SideBarContent2.childs.map((child)=>{
            return(typeof child === 'string'?
            (<div className='flex justify-between pl-8 pr-6 py-[10px] hover:bg-gray-200 cursor-pointer text-[14px]'>{child} <IoIosArrowForward className='text-gray-500' size={20}/></div>)
            :(<div>
              {isShown1 && <hr className='w-[85%] mx-auto mb-1'/>}
              {isShown1 && child.childs.map((item)=>(
                <div className='flex justify-between pl-8 pr-6 py-[10px] hover:bg-gray-200 cursor-pointer text-[14px]'>{item} <IoIosArrowForward className='text-gray-500' size={20}/></div>
                ))}
              <h3 className='flex pl-8 pr-6 py-[10px] hover:bg-gray-200 cursor-pointer text-[14px]' onClick={()=>setIsShown1(!isShown1)}>{child.name}<IoIosArrowForward className={`text-gray-500 ${isShown1? '-rotate-90': 'rotate-90'} ml-2`} size={20}/></h3>
             </div>))
          })}
        </div>
        <hr className='mt-1 border-t-[1px]'/>
        <div>
          <h2 className='font-bold text-[18px] pl-8 pt-4 pb-2'>{SideBarContent3.title}</h2>
          {SideBarContent3.childs.map((child)=>{
            return(typeof child === 'string'?
            (<div className='flex justify-between pl-8 pr-6 py-[10px] hover:bg-gray-200 cursor-pointer text-[14px]'>{child} <IoIosArrowForward className='text-gray-500' size={20}/></div>)
            :(<div>
              {isShown2 && <hr className='w-[85%] mx-auto mb-1'/>}
              {isShown2 && child.childs.map((item)=>(
                <div className='flex justify-between pl-8 pr-6 py-[10px] hover:bg-gray-200 cursor-pointer text-[14px]'>{item} <IoIosArrowForward className='text-gray-500' size={20}/></div>
                ))}
              <h3 className='flex pl-8 pr-6 py-[10px] hover:bg-gray-200 cursor-pointer text-[14px]' onClick={()=>setIsShown2(!isShown2)}>{child.name}<IoIosArrowForward className={`text-gray-500 ${isShown2? '-rotate-90': 'rotate-90'} ml-2`} size={20}/></h3>
             </div>))
          })}
        </div>
        <hr className='mt-1 border-t-[1px]'/>
        <div>
          <h2 className='font-bold text-[18px] pl-8 pt-4 pb-2'>Help & Settings</h2>
          <div className='flex pl-8 pr-6 py-[10px] hover:bg-gray-200 cursor-pointer text-[14px]'>Your Account</div>
          <div className='flex items-center pl-8 pr-6 py-[10px] hover:bg-gray-200 cursor-pointer text-[14px]'><TbWorld className='mr-2 text-gray-400' size={15}/> English</div>
          <div className='flex items-center pl-8 pr-6 py-[10px] hover:bg-gray-200 cursor-pointer text-[14px]'><img src={flag} alt="usa" className='w-[15px] h-[10px] mr-2'/>Unated States</div>
          <div className='flex pl-8 pr-6 py-[10px] hover:bg-gray-200 cursor-pointer text-[14px]'>Customer Services</div>
          <div className='flex pl-8 pr-6 py-[10px] hover:bg-gray-200 cursor-pointer text-[14px] mb-10'>Sign in</div>
        </div>
      </div>
    </div>
  )
}
