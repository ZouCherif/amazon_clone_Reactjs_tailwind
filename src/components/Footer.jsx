import React from 'react'
import {footerLinks, footerLinks2} from "../data"
import { logo, flag} from '../assets'
import LanguageDropdownMenu from './LanguageDropdownMenu'
import { TbWorld } from "react-icons/tb";
import Link from './Link';

function Footer() {
  const [show, setshow] = React.useState(false) 
  return (
    <footer>
        <div className="bg-[#232f3e] py-8 text-white">
          <div className="w-[70%] mx-auto mb-20">
            <div className="flex justify-around">
              {footerLinks.map((link)=>(
                <div className="w-[165px]">
                  <h3 className="font-bold mb-2">{link.title}</h3>
                  <ul>
                    {link.links.map((item)=>(
                      <li className="text-[14px] mb-1 cursor-pointer hover:underline">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>  
          </div>
          <hr/>
          <div className='flex justify-end items-center w-[600px] mx-auto px-[30px] mt-6 text-gray-400 text-[14px]'>
            <img src={logo} className="w-[80px] mr-auto h-6 cursor-pointer"/>
            <div className='flex relative cursor-pointer mr-2 border-[1px] p-2 items-center rounded-sm' 
            onMouseEnter={()=> setshow(true)}
            onMouseLeave={() => setshow(false)} >
                <TbWorld className='mr-2'/>
                <span>English</span>
                {show && <LanguageDropdownMenu/>}
            </div>
            <div className='mr-2 border-[1px] p-2 rounded-sm cursor-pointer'><span className='mr-2'>$</span>USD - U.S.Dollar</div>
            <div className='flex items-center border-[1px] p-2 rounded-sm cursor-pointer'><img src={flag} alt="" className='w-[20px] h-4 mr-1'/> United States</div>
          </div>
        </div>
        <div className='bg-[#131921] text-white pb-8'>
          <div className='grid grid-cols-7 gap-4 w-[70%] mx-auto p-8'>
            {footerLinks2.map((item)=>(
              <Link data={item}/>
            ))}
          </div>
          <div className='w-fit mx-auto'>
            <div className='flex'>
              <p className='hover:underline cursor-pointer mr-4 text-[13px]'>Conditions of Use</p>
              <p className='hover:underline cursor-pointer mr-4 text-[13px]'>Privacy Notice</p>
              <p className='hover:underline cursor-pointer text-[13px]'>Intrest-Based Ads</p>
            </div>
            <p className='text-[13px] text-center'>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer