import React, { useState } from 'react'
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


const Menu = ({
    showHomePage, 
    homePage,
    showCreatePage,
    createPage,
    showTransferPage,
    transferPage,
    showDepositPage,
    depositPage,
    showWithdrawPage,
    withdrawPage,
    showLogoutPage,
    logoutPage
}) => {
    return (
        <>
            <div className='flex flex-col h-full w-1/4 bg-[#474747] border-slate-200 p-3 shadow'>
                <Logo />
                <MenuList
                    icon={<HomeIcon className='h-12 w-12' />}
                    text={'Home'}
                    setShowPage={showHomePage}
                    showPage={homePage}
                />
                <MenuList
                    icon={<UserPlusIcon className='h-12 w-12 ' />}
                    text={'Create Account'}
                    setShowPage={showCreatePage}
                    showPage={createPage}
                />
                <MenuList
                    icon={<ArrowsRightLeftIcon className='h-12 w-12 ' />}
                    text={'Fund Transfer'}
                    setShowPage={showTransferPage}
                    showPage={transferPage}
                />
                <MenuList
                    icon={<ArrowUpOnSquareStackIcon className='h-12 w-12 ' />}
                    text={'Deposit'}
                    setShowPage={showDepositPage}
                    showPage={depositPage}
                />
                <MenuList
                    icon={<ArrowDownOnSquareStackIcon className='h-12 w-12 ' />}
                    text={'Withdraw'}
                    setShowPage={showWithdrawPage}
                    showPage={withdrawPage}
                />
                {/* <MenuList
                    icon={<PowerIcon className='h-12 w-12 ' />}
                    text={'Logout'}
                    setShowPage={showLogoutPage}
                    showPage={logoutPage}
                />
         */}
            </div>
        </>
    )
}

export default Menu