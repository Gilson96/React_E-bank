import React from 'react'
import logo from '../../assets/logo.png'

const Logo = ({logoClass, textClass}) => {
  return (
    <div className='flex items-end'>
                <img 
                    src={logo}
                    alt='logo'
                    className={`h-24 w-24 ${logoClass}`} 
                />
                <p 
                    id='logoFont'
                    className={`text-orange-400 text-2xl ${textClass}`}
                >
                    TINYbank
                </p>
            </div>
  )
}

export default Logo