import { useState } from 'react'
import Menu from '../UI/Menu'
import Accounts from './Accounts';
import CreateAccount from './CreateAccount'
import Transfer from './Transfer'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import { Navigate } from "react-router-dom";

const Admin = () => {
  const [isActive, setIsAcitve] = useState('')

  return (
    <>
      <section className='flex flex-col w-full h-full gap-2'>

        <Menu
          showHomePage={setIsAcitve}
          homePage={'home'}
          showCreatePage={setIsAcitve}
          createPage={'create'}
          showTransferPage={setIsAcitve}
          transferPage={'transfer'}
          showDepositPage={setIsAcitve}
          depositPage={'deposit'}
          showWithdrawPage={setIsAcitve}
          withdrawPage={'withdraw'}
          showLogoutPage={setIsAcitve}
          logoutPage={'logout'}
        />

        <div className='flex flex-col w-full h-full overflow-y-auto gap-3 my-3'>
          {isActive === '' && <Accounts /> }
          {isActive === 'home' && <Accounts />}
          {isActive === 'create' && <CreateAccount /> }
          {isActive === 'transfer' && <Transfer />}
          {isActive === 'deposit' && <Deposit />}
          {isActive === 'withdraw' && <Withdraw />}
          {isActive === 'logout' && <Navigate to={'/'} />}
        </div>
      </section>
    </>
  )
}

export default Admin