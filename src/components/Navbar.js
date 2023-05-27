import React, { useState } from 'react'
import userImg from '../assets/user.jpg'
import { navbarLinks } from '../data'
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import NavLinks from './NavLinks'

const Navbar = () => {

    return (
        <div className='w-[22%] h-screen bg-pink-1 text-white'>
        <div className='  py-4  px-2 w-[22%] fixed h-screen'>
            <h2 className='text-xl font-semibold text-center'>Mount Caramel School</h2>
            <img src={userImg} alt="user image" className='w-[60px] h-[60px] rounded-full mx-auto mt-4' />
            <p className='text-center'>Lisa Jackson</p>
            <div className='h-[80%] overflow-auto my-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200'>
                <ul className=''>
                    {
                        navbarLinks.map((navlink) => {
                            return (
                                <NavLinks key={navlink.id}
                                    id={navlink.id}
                                    title={navlink.title}
                                    icon={navlink.icon}
                                    subLinks={navlink.subLinks} />
                            )
                        })
                    }
                </ul>
            </div>

        </div>
        </div>
    )
}

export default Navbar
