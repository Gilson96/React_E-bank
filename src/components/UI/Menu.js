import React from 'react'
import { Link } from 'react-router-dom'
import {
    HomeIcon,
    ArrowUpOnSquareStackIcon,
    ArrowDownOnSquareStackIcon,
    ArrowsRightLeftIcon,
    UserPlusIcon,
    PowerIcon
}
    from '@heroicons/react/24/outline'
import Logo from './Logo'
import MenuList from './MenuList'


const Menu = () => {

    return (
        <>
            <div className='flex flex-col h-full w-1/4 bg-[#474747] border-slate-200 p-3 shadow'>
                <Logo />
                <MenuList
                    icon={<HomeIcon className='h-10 w-10'/>}
                    text={'Home'}
                    link='/admin'
                />
                <MenuList 
                    icon={<UserPlusIcon className='h-10 w-10'/>}
                    text={'Create Account'}
                    link='/create'
                />
                <MenuList 
                    icon={<ArrowsRightLeftIcon className='h-10 w-10'/>}
                    text={'Fund Transfer'}
                    link='/transfer'
                />
                <MenuList 
                    icon={<ArrowUpOnSquareStackIcon className='h-10 w-10'/>}
                    text={'Deposit'}
                    link='/deposit'
                />
                <MenuList 
                    icon={<ArrowDownOnSquareStackIcon className='h-10 w-10'/>}
                    text={'Withdraw'}
                    link='/withdraw'
                />
                <MenuList 
                    icon={<PowerIcon className='h-10 w-10'/>}
                    text={'Logout'}
                    link='/'
                />
            </div>
        </>
    )
}

export default Menu