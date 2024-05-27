import React from 'react'

const Input = ({ label, id, classname, ...props }) => {
    
    return (
        <div className='flex w-[95%] h-full p-2 justify-start items-center '>
            <label className='flex w-1/3 font-bold uppercase'>{label}</label>
            <input
                id={id}
                name={id}
                className={`border border-slate-200 p-2 w-[70%] rounded justify-start ${classname}`}
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