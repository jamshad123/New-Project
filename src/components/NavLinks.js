import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowRight } from 'react-icons/md'


const NavLinks = ({ id, title, url, icon, subLinks }) => {

    const [showSublinks, setShowSublinks] = useState(false);

    return (
        <li>
            <div className={`flex justify-between items-center cursor-pointer py-[10px] px-[20px] hover:bg-pink-2 rounded-xl my-2
            ${showSublinks && 'bg-pink-2 rounded-xl'}`}
                onClick={() => setShowSublinks(!showSublinks)}>
                <span className='flex gap-2'>{icon} {title}</span>
                <span >{showSublinks ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
            </div>
            <ul className='ml-6'>
                {
                    subLinks.map((sublink) => {
                        return (
                            <li key={sublink.id} className={`flex gap-2 cursor-pointer py-1 hover:text-pink-3 ${showSublinks === false && 'hidden'}`} onClick={()=> setShowSublinks(false)}>
                                <span><MdKeyboardDoubleArrowRight /></span>
                                <span>{sublink.sublinkTitle}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </li>
    )
}

export default NavLinks
