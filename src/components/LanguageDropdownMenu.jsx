import React from 'react'
import { languages } from '../data'
import { flag } from '../assets'

const LanguageDropdownMenu = () => {
  return (
    <div className='absolute top-full left-0 z-10 bg-white text-black w-[230px] border-black border-2 p-3 rounded-[3px]'>
        <div className='bg-white w-[12px] h-[12px] rotate-45 absolute top-[-7px] left-[35px]' ></div>
        <div>
            <p className='text-[14px]'>Change language <span className='text-[11px] text-blue-500 hover:underline'><a href="#">Learn more</a></span></p>
            <input type="radio" id='english' className='mt-3'/>
            <label htmlFor="#" className='text-[14px]'> English - EN</label>
            <hr className='mt-2 w-[150px] mx-auto'/>
        </div>
        <div>
          {languages.map((language) => (
            <div>
              <input type="radio" className='mt-4'/>
              <label htmlFor="#" className='text-[14px]'>{language}</label>
            </div>
          ))}
          <hr className='mt-2 w-[150px] mx-auto'/>
        </div>
        <div>
          <p className='text-[14px] mt-2'>Change currency <span className='text-[11px] text-blue-500 hover:underline'><a href="#">Learn more</a></span></p>
          <p className='text-[14px] flex justify-between pr-2 mt-2'><span>$ - USD - US Dollar</span><span className='text-[12px] text-blue-500 hover:underline'>Change</span></p>
          <hr className='mt-2 w-[150px] mx-auto'/>
        </div>
        <div>
          <p className='text-[14px] mt-2'><img src={flag} alt="USA" className='w-5 inline-block'/> You are shopping on <br /> Amazon.com</p>
          <p className='mt-5  text-blue-700 hover:underline text-center text-[14px]'>Change country/region.</p>
        </div>
    </div>
  )
}

export default LanguageDropdownMenu