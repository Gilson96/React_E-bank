import React from 'react'
import { Link } from 'react-router-dom'

const MenuList = ({ icon, text, link }) => {
    return (
        <ul className='flex h-full w-full items-end gap-1 hover:text-[#E0E0CE]'>
            <Link to={link} className='no-underline hover:text-[#E0E0CE] text-black'>
                <p className='flex items-center gap-1  hover:text-[#E0E0CE] font-bold uppercase active:text-[#e0e0ce] focus:text-[#E0E0CE]'>
                    <i>{icon}</i>
                    {text}
                </p>
            </Link>
        </ul>
    )
}

export default MenuList