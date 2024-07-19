import {
  UserPlusIcon,
  ArrowsRightLeftIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import useScreenSize from '../../features/useScreenSize'

const MenuDashboard = ({ value, handleChange, setIsActive, isActive, onToggle }) => {

  const screenSize = useScreenSize()

  return (
    <>
   
        <div className={`${screenSize.width < 1024 ? 'hidden' : ''} `}>
          <h1 className='flex w-full text-left font-bold text-2xl mb-2'>Dashboard</h1>

          <div className='flex flex-row w-[35rem] h-auto justify-center items-center p-3 border border-slate-200 shadow rounded gap-5 bg-white'>

            <button className='flex flex-col justify-center items-center w-[100%] h-auto border-[1px] border-[#243c5a] rounded-md p-3' onClick={() => { setIsActive('accounts'); onToggle(); }}>
              <i><UserGroupIcon className='h-10 w-10 text-[#243c5a]' /></i>
              <p className='text-xs'>All Accounts</p>
            </button>

            <button className='flex flex-col justify-center items-center w-[100%] h-auto border-[1px] border-[#243c5a] rounded-md p-3' onClick={() => { setIsActive('create'); onToggle(); }}>
              <i><UserPlusIcon className='h-10 w-10 text-[#243c5a]' /></i>
              <p className='text-xs'>Add Account</p>
            </button>

            <button className='flex flex-col justify-center items-center w-[100%] h-auto border-[1px] border-[#243c5a] rounded-md p-3' onClick={() => { setIsActive('transfer'); onToggle(); }}>
              <i><ArrowsRightLeftIcon className='h-10 w-10 text-[#243c5a]' /></i>
              <p className='text-xs'>Transfer Funds</p>
            </button>
          </div>
        </div>
      
    </>
  )
}

export default MenuDashboard