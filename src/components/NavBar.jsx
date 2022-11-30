import React from 'react'
import {logo, flag} from "../assets"
import { dropdown } from '../data'
import { AiOutlineSearch } from "react-icons/ai";
import {CgShoppingCart} from "react-icons/cg"

const NavBar = () => {
  return (
    <div className='flex'>
        <div className='flex nav-bg w-full text-white p-[7px] content-around'>
            <img src={logo} alt="Amazon" className='w-[90px] h-[40px]'/>
            <div className=''>
                <p>Deliver to</p>
                <p>Algeria</p>
            </div>
            <div className='h-8'>
              <select name="sections" id="sections" className='text-black w-[50px] h-full rounded-l bg-slate-200 '>
                {dropdown.map((opt) => <option value={opt}>{opt}</option> )}
              </select>
              <input type="text" className='h-full'/>
              <button className='bg-orange-300 w-[40px] h-full rounded-r '><AiOutlineSearch className='fill-black'/></button>
            </div>
            <div className='flex items-center'>
              <img src={flag} alt="usa" className='h-[17px] w-[25px] pr-[3px]' />
              <p className='font-bold'>EN</p>
            </div>
            <div>
              <p>Hello, sign in</p>
              <p className='font-bold'>Account & Lists</p>
            </div>
            <div>
              <p>Returns</p>
              <p className='font-bold'>& Orders</p>
            </div>
            <div className='flex'>
              <CgShoppingCart className=""/>
              <p>Cart</p>
            </div>
        </div>
    </div>  
  )
}

export default NavBar
