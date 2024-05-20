import React from 'react'

const Input = ({ label, id, classname,...props }) => {
    return (
        <div>
            <label 
                htmlFor={id}
                className={`w-1/2 text-left text-sm font-bold uppercase my-2`}
            >
                {label}
            </label>
            <input
                id={id}
                name={id}
                className='w-1/2 border border-slate-200 p-2'
                required
                // collects any other prop
                // and spreads onto the input
                // to make the input more 
                // configurable from outside
                {...props}
            />
        </div>
    )
}

export default Input