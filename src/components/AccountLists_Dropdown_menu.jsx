import React from 'react'
import StartHere from './StartHere'
import {listsAccount} from '../data'

function AccountLists_Dropdown_menu() {
  return (
    <div className='absolute top-full w-[480px] left-[-200px] z-10 bg-white text-black border-black border-[1px] rounded-[3px] p-5 cursor-default'>
      <div className='bg-white w-[12px] h-[12px] rotate-45 absolute top-[-6px] right-[170px]' ></div>
      <div className='w-fit mx-auto'>
        <StartHere/>
      </div>
      <hr className='mt-2'/>
      <div className='flex justify-between'>
        <div className='mt-5'>
          <h2 className='text-[18px] font-bold'>{listsAccount[0].name}</h2>
          {listsAccount[0].links.map((link) => (
            <div className='mt-2'>
              <a href="#" className='text-[13px] text-[#444] hover:text-[#c29d40] hover:underline'>{link}</a>
            </div>
          ))}
        </div>
        <div className='mt-5 mr-5 border-l-[1px] pl-5'>
        <h2 className='text-[18px] font-bold'>{listsAccount[1].name}</h2>
          {listsAccount[1].links.map((link) => (
            <div className='mt-2'>
              <a href="#" className='text-[13px] text-[#444] hover:text-[#c29d40] hover:underline'>{link}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AccountLists_Dropdown_menu