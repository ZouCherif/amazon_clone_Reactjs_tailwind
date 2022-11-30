import React from 'react'
import {logo, flag} from "../assets"
import { dropdown } from '../data'
import { AiOutlineSearch } from "react-icons/ai";
import {CgShoppingCart} from "react-icons/cg"

const NavBar = () => {
  return (
    <div className=''>
        <div className='flex justify-around nav-bg w-full text-white p-[7px]'>
            <img src={logo} alt="Amazon" className='w-[100px] h-[30px] mr-5 place-self-center'/>
            <div className='flex-none mr-5'>
                <p>Deliver to</p>
                <p>Algeria</p>
            </div>
            <div className=' flex grow mr-5 sm:w-full p-1'>
              <select name="sections" id="sections" className='text-black w-[50px] rounded-l bg-slate-200 '>
                {dropdown.map((opt) => <option value={opt}>{opt}</option> )}
              </select>
              <input type="text" className='grow'/>
              <button className='bg-orange-300 w-[40px] rounded-r'><AiOutlineSearch className='fill-black'/></button>
            </div>
            <div className='flex items-center flex-none mr-5'>
              <img src={flag} alt="usa" className='h-[17px] w-[25px] pr-[3px]' />
              <p className='font-bold'>EN</p>
            </div>
            <div className='flex-none mr-5'>
              <p>Hello, sign in</p>
              <p className='font-bold'>Account & Lists</p>
            </div>
            <div className='flex-none mr-5'>
              <p>Returns</p>
              <p className='font-bold'>& Orders</p>
            </div>
            <div className='flex flex-none mr-5'>
              <CgShoppingCart className=""/>
              <p>Cart</p>
            </div>
        </div>
    </div>  
  )
}

export default NavBar
