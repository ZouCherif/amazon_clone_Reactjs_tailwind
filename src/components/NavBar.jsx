import React from 'react'
import {logo} from "../assets"
import { dropdown } from '../data'
import { AiOutlineSearch } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className=''>
        <div className='flex nav-bg w-full text-white p-[7px]'>
            <img src={logo} alt="Amazon" className='w-[90px] h-[40px]'/>
            <div className=''>
                <p>Deliver to</p>
                <p>Algeria</p>
            </div>
            <div>
              <select name="sections" id="sections" className='text-black w-[50px] h-8 rounded-l bg-slate-200 '>
                {dropdown.map((opt) => <option value={opt}>{opt}</option> )}
              </select>
              <input type="text" className='h-8'/>
              <button className='bg-orange-300 w-[40px] h-8 rounded-r '><AiOutlineSearch className='fill-black'/></button>
            </div>
            <div>
              
            </div>
        </div>
    </div>  
  )
}

export default NavBar
