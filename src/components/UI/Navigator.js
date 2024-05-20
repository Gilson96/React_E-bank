import React from 'react'
import logo from '../../assets/logo.png'
import {
    ChevronRight,
    UserPlusIcon,
    ArrowRightStartOnRectangle
} from '@heroicons/react/24/solid'

const Navigator = ({ children }) => {
    return (
        <nav className='flex h-18 w-full bg-slate-500 items-center shadow-md'>
            <div className='flex items-end'>
                <img 
                    src={logo}
                    alt='logo'
                    className='h-20 w-20' 
                />
                <p 
                    id='logoFont'
                    className='text-orange-400 text-xl'
                >
                    TINYbank
                </p>
            </div>
            {children}
        </nav>
    )
}

export default Navigator