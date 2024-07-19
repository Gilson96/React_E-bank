import {
    Bars3Icon,
    UserPlusIcon,
    ArrowsRightLeftIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import useScreenSize from '../features/useScreenSize'
import Logo from './Logo'

const MenuNav = () => {
    const screenSize = useScreenSize()

    return (
        <>

            {screenSize.width < 1024 ?
                <Menu>
                    <MenuButton className='flex w-full h-16 bg-[#233D4D] p-2 shadow-md'>
                        <Bars3Icon className='w-10 h-10' />
                    </MenuButton>
                    <MenuList className='m-2'>
                        <MenuItem as={'a'} href='#/' icon={<UserGroupIcon className='h-4 w-4' />}>All Accounts</MenuItem>
                        <MenuItem as={'a'} href='#/create' icon={<UserPlusIcon className='h-4 w-4' />}>Add Accounts</MenuItem>
                        <MenuItem as={'a'} href='#/transfer' icon={<ArrowsRightLeftIcon className='h-4 w-4' />}>Transfer Funds</MenuItem>
                    </MenuList>
                </Menu>
                :
                <Menu>
                    <MenuButton className='flex w-full h-20 bg-[#233D4D] p-4 shadow-md'>
                        <Logo />
                    </MenuButton>
                </Menu>
            }

        </>
    )
}

export default MenuNav
