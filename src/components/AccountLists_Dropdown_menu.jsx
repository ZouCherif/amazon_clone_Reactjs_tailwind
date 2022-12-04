import React from 'react'
import StartHere from './StartHere'

function AccountLists_Dropdown_menu() {
  return (
    <div className='absolute top-full w-[450px] left-[-200px] z-10 bg-white text-black border-black border-[1px] rounded-[3px] p-3 cursor-default'>
      <div className='bg-white w-[12px] h-[12px] rotate-45 absolute top-[-6px] right-[150px]' ></div>
      <div className='w-fit mx-auto'>
        <StartHere/>
      </div>
      <hr className='mt-2'/>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default AccountLists_Dropdown_menu