import React from 'react'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'

const Logo = ({ logoClass, textClass, logoContainerClass }) => {

    return (
        <div className={`flex my-2 ${logoContainerClass}`}>
            <a href='/create' className='flex' >
            <i className={`text-[#F2AF29] ${logoClass}`}><RocketLaunchIcon className='h-12'/></i>
            <p id='logoFont' className={`text-4xl ${textClass}`}>ROCKET<span className='text-xl'>bank</span></p>
            </a>
        </div>
    )
}

export default Logo