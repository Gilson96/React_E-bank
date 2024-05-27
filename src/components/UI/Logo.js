import React from 'react'
import logo from '../../assets/logo.png'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'

const Logo = ({ logoClass, textClass }) => {

    return (
        <div className='flex my-2'>
            <i className='text-[#F2AF29]'><RocketLaunchIcon className='h-12'/></i>
            <p id='logoFont' className={`text-4xl ${textClass}`}>ROCKET<span className='text-xl'>bank</span></p>
        </div>
    )
}

export default Logo