import React from 'react'

export const SideBar = (props) => {
  return (
    <div className={`z-20 absolute h-screen w-[350px] bg-white ${props.isOpen? 'translate-x-0' :'-translate-x-full'} ease-in-out duration-500 top-0 left-0`}>

    </div>
  )
}
