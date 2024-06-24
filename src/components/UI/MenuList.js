import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScreenSize from '../features/useScreenSize'

const MenuList = ({ icon, text, showPage, setShowPage, children }) => {

    const screenSize = useScreenSize()

    return (
        <>
            {children}
            <ul className={`flex h-full ${screenSize.width < 1024? 'p-0' : 'w-full p-3'}  items-center hover:text-[#E0E0CE] cursor-pointer no-underline `}>

                <p className={`${screenSize.width < 1024? 'flex flex-col' : 'flex'} items-center gap-1 hover:text-[#E0E0CE] font-bold uppercase no-underline text-[#21201f]`} onClick={() => setShowPage(showPage)}>
                    <i>{icon}</i>
                  {screenSize.width < 1024? <p className=''></p> : text}  
                </p>

            </ul>
        </>
    )
}

export default MenuList