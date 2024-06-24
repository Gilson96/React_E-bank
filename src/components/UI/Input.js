import React from 'react'
import useScreenSize from '../features/useScreenSize'

const Input = ({ label, id, classname, ...props }) => {
    const screenSize = useScreenSize()
    return (
        <div className='flex w-[95%] h-full p-2 justify-start items-center '>
            <label className={`flex flex-wrap ${screenSize.width < 1024? 'text-xs' : 'text-base'} w-1/2 font-bold uppercase`}>{label}</label>
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