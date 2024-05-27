import React from 'react'

const Button = ({ classname,children, ...props }) => {

    return (
        <button
            className={`border border-slate-200 shadow items-center justify-center rounded p-2 hover:text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 duration-300 ${classname}`}
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