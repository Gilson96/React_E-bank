import React from 'react'

const Button = ({ children, ...props }) => {

    return (
        <button
            className='w-1/2 my-8 h-20 border border-slate-100 rounded-md shadow font-bold hover:bg-orange-300 hover:text-white p-2 uppercase '
            // collects any other prop
            // and spreads onto the input
            // to make the input more 
            // configurable from outside
            {...props}
        >
            {children}
        </button>
    )
}

export default Button