import React from 'react'
import {logo, flag} from "../assets"
import { dropdown } from '../data'
import { AiOutlineSearch } from "react-icons/ai";
import {CgShoppingCart} from "react-icons/cg"
import {HiOutlineLocationMarker} from "react-icons/hi"
import LanguageDropdownMenu from './LanguageDropdownMenu'
import AccountLists_Dropdown_menu from './AccountLists_Dropdown_menu';

const NavBar = () => {
  const [language, setLanguage] = React.useState(false)
  const [accountLists, setaccountLists] = React.useState(false)
  return (
    <div>
        <div className='flex justify-around nav-bg w-full text-white p-[7px] h-[60px] leading-[15px]'>
            <div className='w-[120px] flex-none place-self-center hover:border-[1px] cursor-pointer'>
              <img src={logo} alt="Amazon" className='h-[30px] m-1'/>
            </div>
            <div className='flex flex-none mr-5 hover:border-[1px] cursor-pointer items-center p-2'>
              <HiOutlineLocationMarker  className='mr-[2px] mt-auto'/>
              <p className='text-[12px] text-[#ccc]'>Deliver to <br /><span className='text-[14px] text-white font-bold'>Algeria</span></p>
            </div>
            <div className=' flex grow mr-4 sm:w-full p-1'>
              <select name="sections" id="sections" className='text-black w-[50px] rounded-l bg-slate-200 '>
                {dropdown.map((opt) => <option value={opt}>{opt}</option> )}
              </select>
              <input type="text" className='grow'/>
              <button className='bg-orange-300 w-[40px] rounded-r'><AiOutlineSearch className='fill-black'/></button>
            </div>
            <div className='flex items-center flex-none mr-4 hover:border-[1px] cursor-pointer p-2 relative' 
            onMouseEnter={() => setLanguage(true)}
            onMouseLeave={() => setLanguage(false)}>
              <img src={flag} alt="usa" className='h-[17px] w-[25px] pr-[3px]'/>
              <p className='font-bold text-[14px]'>EN</p>
              {language && <LanguageDropdownMenu />}
            </div>
            <div className='flex-none mr-4 hover:border-[1px] cursor-pointer pt-2 px-1 relative'
            onMouseEnter={() => setaccountLists(true)}
            onMouseLeave={() => setaccountLists(false)}
            >
              <p className='text-[12px]'>Hello, sign in</p>
              <p className='font-bold text-[14px]'>Account & Lists</p>
              {true && <AccountLists_Dropdown_menu />}
            </div>
            <div className='flex-none mr-4 hover:border-[1px] cursor-pointer pt-2 px-1'>
              <p className='text-[12px]'>Returns</p>
              <p className='font-bold text-[14px]'>& Orders</p>
            </div>
            <div className='flex flex-none mr-3 items-center hover:border-[1px] cursor-pointer p-2'>
              <CgShoppingCart size={35}/>
              <p className='text-[14px] font-bold'>Cart</p>
            </div>
        </div>
    </div>  
  )
}

export default NavBar
