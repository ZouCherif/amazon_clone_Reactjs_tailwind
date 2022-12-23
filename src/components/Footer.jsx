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
          <div className="md:w-[70%] px-4 mx-auto mb-20">
            <div className="flex justify-around">
              {footerLinks.map((link)=>(
                <div className="xs:w-[165px] w-[140px]">
                  <h3 className="font-bold mb-2 xs:text-[16px] text-[12px]">{link.title}</h3>
                  <ul>
                    {link.links.map((item)=>(
                      <li className="xs:text-[14px] text-[10px] mb-1 cursor-pointer hover:underline">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>  
          </div>
          <hr/>
          <div className='md:flex justify-end items-center md:w-[600px] max-w-[300px] mx-auto px-[30px] mt-6 text-gray-400 xs:text-[14px] text-[12px]'>
            <img src={logo} className="w-[80px] xs:mr-auto mx-auto h-6 cursor-pointer mb-2 "/>
            <div className='flex cursor-pointer mr-2 border-[1px] p-2 items-center rounded-sm md:mb-0 mb-2 md:w-fit w-full relative' 
            onMouseEnter={()=> setshow(true)}
            onMouseLeave={() => setshow(false)} >
                <TbWorld className='mr-2'/>
                <span>English</span>
                {show && <LanguageDropdownMenu/>}
            </div>
            <div className='mr-2 border-[1px] p-2 rounded-sm cursor-pointer md:mb-0 mb-2 md:w-fit w-full'><span className='mr-2'>$</span>USD - U.S.Dollar</div>
            <div className='flex items-center border-[1px] p-2 rounded-sm cursor-pointer'><img src={flag} alt="" className='w-[20px] h-4 mr-1'/> United States</div>
          </div>
        </div>
        <div className='bg-[#131921] text-white pb-8'>
          <div className='grid sm:grid-cols-7 xs:grid-cols-4 grid-cols-2 gap-4 md:w-[70%] mx-auto p-6'>
            {footerLinks2.map((item)=>(
              <Link data={item}/>
            ))}
          </div>
          <div className='w-fit mx-auto'>
            <div className='flex px-2'>
              <p className='hover:underline cursor-pointer xs:mr-4 mr-2 xs:text-[13px] text-[10px]'>Conditions of Use</p>
              <p className='hover:underline cursor-pointer xs:mr-4 mr-2 xs:text-[13px] text-[10px]'>Privacy Notice</p>
              <p className='hover:underline cursor-pointer xs:text-[13px] text-[10px]'>Intrest-Based Ads</p>
            </div>
            <p className='text-[13px] text-center'>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer