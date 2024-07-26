import './App.css';
import { Route, Routes } from 'react-router-dom'
import Menu from './components/UI/Menu'
import Admin from './components/screens/Admin/Admin'
import CreateAccount from './components/screens/Admin/CreateAccount'
import Account from './components/screens/Admin/Account';
import Transfer from './components/screens/Admin/Transfer';
import useScreenSize from './components/features/useScreenSize';
import Dashboard from './components/screens/Admin/Dashboard';
import { HashRouter } from 'react-router-dom';
import { useGetAccountsQuery } from "./components/features/apiSlice"
import { CircularProgress } from '@chakra-ui/react'

const App = () => {
  const screenSize = useScreenSize()
  const { data: accounts = [], isLoading } = useGetAccountsQuery()

  return (
    <>
      {isLoading ?
        <div className='flex h-screen w-full justify-center items-center gap-2'>
          <CircularProgress isIndeterminate color='orange.300' thickness='12px' />
          <p>Loading</p>
        </div>
        :
        <div className={`${screenSize.width < 1024 ? 'h-full' : 'overflow-hidden '} w-full bg-[#233D4D]/[0.1] `}>
          <Menu />
          <HashRouter>
            <Routes>
              {screenSize.width < 1024 ?
                <Route path='/' element={<Dashboard />} />
                :
                <Route path='/' element={<Admin />} />
              }
              <Route path='/transfer' element={<Transfer />} />
              <Route path='/create' element={<CreateAccount />} />
              <Route path='/accounts/:userId' element={<Account />} />
            </Routes>
          </HashRouter>
        </div >
      }
    </>

  );
}

export default App;
