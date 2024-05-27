import { useState } from 'react'
import { Link } from 'react-router-dom'

const MenuList = ({ icon, text, showPage, setShowPage, children }) => {

    return (
        <>
            {children}
            <ul className='flex h-full w-full items-end gap-1 hover:text-[#E0E0CE] cursor-pointer no-underline'>

                <p className='flex items-center gap-1  hover:text-[#E0E0CE] font-bold uppercase no-underline text-[#21201f]' onClick={() => setShowPage(showPage)}>
                    <i>{icon}</i>
                    {text}
                </p>

            </ul>
        </>
    )
}

export default MenuList