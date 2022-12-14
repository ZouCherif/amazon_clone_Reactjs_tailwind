import React from 'react'
import {logo, flag} from "../assets"
import { dropdown } from '../data'
import { AiOutlineSearch } from "react-icons/ai";
import {CgShoppingCart} from "react-icons/cg"
import { BsList } from "react-icons/bs";
import {HiOutlineLocationMarker} from "react-icons/hi"
import LanguageDropdownMenu from './LanguageDropdownMenu'
import AccountLists_Dropdown_menu from './AccountLists_Dropdown_menu';
import { SideBar } from './SideBar';


import { IoMdClose } from "react-icons/io";
const NavBar = () => {
  const [language, setLanguage] = React.useState(false)
  const [accountLists, setaccountLists] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
        <div className='flex justify-around bg-[#131921] w-full text-white p-[6px] h-[60px] leading-[15px]'>
            <div className='w-[120px] flex-none place-self-center border-[1px] border-transparent hover:border-white cursor-pointer'>
              <img src={logo} alt="Amazon" className='h-[30px] m-1'/>
            </div>
            <div className='flex flex-none mr-5 border-[1px] border-transparent hover:border-white cursor-pointer items-center p-2'>
              <HiOutlineLocationMarker  className='mr-[2px] mt-auto'/>
              <p className='text-[12px] text-[#ccc]'>Deliver to <br /><span className='text-[14px] text-white font-bold'>Algeria</span></p>
            </div>
            <div className=' flex grow mr-4 sm:w-full p-1'>
              <select name="sections" id="sections" className='text-black w-[50px] rounded-l bg-slate-200 text-[14px] pl-2'>
                {dropdown.map((opt) => <option value={opt}>{opt}</option> )}
              </select>
              <input type="text" className='grow text-black pl-2 '/>
              <button className='bg-orange-300 w-[40px] rounded-r pl-1'><AiOutlineSearch size={30} className='fill-black'/></button>
            </div>
            <div className='flex items-center flex-none mr-4 border-[1px] border-transparent hover:border-white cursor-pointer p-2 relative' 
            onMouseEnter={() => setLanguage(true)}
            onMouseLeave={() => setLanguage(false)}>
              <img src={flag} alt="usa" className='h-[17px] w-[25px] pr-[3px]'/>
              <p className='font-bold text-[14px]'>EN</p>
              {language && <LanguageDropdownMenu />}
            </div>
            <div className='flex-none mr-4 border-[1px] border-transparent hover:border-white cursor-pointer pt-2 px-1 relative'
            onMouseEnter={() => setaccountLists(true)}
            onMouseLeave={() => setaccountLists(false)}
            >
              <p className='text-[12px]'>Hello, sign in</p>
              <p className='font-bold text-[14px]'>Account & Lists</p>
              {accountLists && <AccountLists_Dropdown_menu />}
            </div>
            <div className='flex-none mr-4 border-[1px] border-transparent hover:border-white cursor-pointer pt-2 px-1'>
              <p className='text-[12px]'>Returns</p>
              <p className='font-bold text-[14px]'>& Orders</p>
            </div>
            <div className='flex flex-none mr-3 items-center border-[1px] border-transparent hover:border-white cursor-pointer p-2'>
              <CgShoppingCart size={35}/>
              <p className='text-[14px] font-bold'>Cart</p>
            </div>
        </div>  
        <div className='flex p-[3px] pl-4 bg-[#232f3e] text-white h-fit text-[14px] font-bold'>
          <div className='cursor-pointer mr-3 border-[1px] border-transparent hover:border-white p-1'
           onClick={() => setIsOpen(!isOpen)}>
            <p className='flex items-center'><BsList className='mr-[2px]' size={23} strokeWidth={0.4}/>All</p>
          </div>
          <div className='cursor-pointer mr-3 border-[1px] border-transparent hover:border-white p-1'><p>Today's Deals</p></div>
          <div className='cursor-pointer mr-3 border-[1px] border-transparent hover:border-white p-1'><p>Customer Service</p></div>
          <div className='cursor-pointer mr-3 border-[1px] border-transparent hover:border-white p-1'><p>Registry</p></div>
          <div className='cursor-pointer mr-3 border-[1px] border-transparent hover:border-white p-1'><p>Gift Cards</p></div>
          <div className='cursor-pointer mr-3 border-[1px] border-transparent hover:border-white p-1'><p>Sell</p></div>
          <div className='cursor-pointer mr-3 border-[1px] border-transparent hover:border-white p-1 ml-auto'><p>Shop great deals now</p></div>
        </div>
        <div className={`transition-opacity duration-500 z-10 ${isOpen? "opacity-80": "opacity-0 hidden"} absolute h-screen w-screen bg-black top-0 right-0`}
          onClick={() => setIsOpen(!isOpen)}>
            <IoMdClose style={{color: "white", position: "absolute", left: "350", cursor: "pointer", marginLeft: "7", marginTop: "10"}} size={35}/>
        </div>
        <SideBar isOpen={isOpen} />
    </div>  
  )
}

export default NavBar
