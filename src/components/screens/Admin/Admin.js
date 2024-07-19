import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import Dashboard from './Dashboard'
import MenuDashboard from './MenuDashboard'
import Analytics from '../Admin/Analytics'
import useScreenSize from '../../features/useScreenSize'
import CreateAccount from './CreateAccount'
import Transfer from './Transfer'

const Admin = () => {
  const [isActive, setIsActive] = useState('accounts')
  const screenSize = useScreenSize()
  const { onToggle } = useDisclosure()

  return (
    <>
      <div className={`flex w-full ${screenSize.width < 1024 ? 'h-full' : 'h-full'} justify-between p-2`}>

        <div className={`flex flex-col h-full w-full gap-5 ml-2 mt-2 mr-5`}>

          {isActive === 'accounts' && <div className='animate__animated animate__fadeIn animate__faster'><Dashboard /></div>}
          {isActive === 'create' && <div className='animate__animated animate__fadeIn animate__faster'><CreateAccount /></div>}
          {isActive === 'search' && <div className='animate__animated animate__fadeIn animate__faster'><CreateAccount /></div>}
          {isActive === 'transfer' && <div className='animate__animated animate__fadeIn animate__faster'><Transfer /></div>}

        </div>

        <div className='flex flex-col gap-5 mt-2'>
          <MenuDashboard
            setIsActive={setIsActive}
            isActive={isActive}
            onToggle={onToggle}
          />
          <Analytics />
        </div>

      </div>
    </>
  )
}

export default Admin
