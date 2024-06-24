import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    HomeIcon,
    ArrowUpOnSquareStackIcon,
    ArrowDownOnSquareStackIcon,
    ArrowsRightLeftIcon,
    UserPlusIcon,
    RocketLaunchIcon,
    Bars3Icon
}
    from '@heroicons/react/24/outline'
import Logo from './Logo'
import MenuList from './MenuList'
import useScreenSize from '../features/useScreenSize'

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
    const [menuToggle, setMenuToggle] = useState(false)
    const screenSize = useScreenSize()

    return (
        <>
            {screenSize.width < 1024 ?
                <div className='flex flex-col p-3 bg-[#474747]'>
                    <Bars3Icon className='h-10 w-10' onClick={() => { setMenuToggle(!menuToggle) }} />
                    {menuToggle &&
                        <div className='flex justify-evenly h-20 w-full bg-[#474747]'>
                            
                            <MenuList
                                icon={<HomeIcon className='h-10 w-10' />}
                                text={'Home'}
                                setShowPage={showHomePage}
                                showPage={homePage}
                            />
                            <MenuList
                                icon={<UserPlusIcon className='h-10 w-10 ' />}
                                text={'Create Account'}
                                setShowPage={showCreatePage}
                                showPage={createPage}
                            />
                            <MenuList
                                icon={<ArrowsRightLeftIcon className='h-10 w-10 ' />}
                                text={'Fund Transfer'}
                                setShowPage={showTransferPage}
                                showPage={transferPage}
                            />
                            <MenuList
                                icon={<ArrowUpOnSquareStackIcon className='h-10 w-10 ' />}
                                text={'Deposit'}
                                setShowPage={showDepositPage}
                                showPage={depositPage}
                            />
                            <MenuList
                                icon={<ArrowDownOnSquareStackIcon className='h-10 w-10 ' />}
                                text={'Withdraw'}
                                setShowPage={showWithdrawPage}
                                showPage={withdrawPage}
                            />
                        </div>
                    }
                </div>
                :

                <div className={`flex flex-col items-center justify-center h-full  w-1/5 bg-[#474747] border-slate-200 p-3 shadow`}>
                    <div className="flex p-3">
                        {screenSize.width < 1024 ? <i className='text-[#F2AF29]'><RocketLaunchIcon className='h-12' /></i> : <Logo />}
                    </div>
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
                </div>
            }

        </>
    )
}

export default Menu