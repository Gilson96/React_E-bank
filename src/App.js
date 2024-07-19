import './App.css';
import { Route, Routes } from 'react-router-dom'
import Menu from './components/UI/Menu'
import Admin from './components/screens/Admin/Admin'
import CreateAccount from './components/screens/Admin/CreateAccount'
import Account from './components/screens/Admin/Account';
import Transfer from './components/screens/Admin/Transfer';
import useScreenSize from './components/features/useScreenSize';
import Dashboard from './components/screens/Admin/Dashboard';

const App = () => {
  const screenSize = useScreenSize()

  return (
    <>
      <div className={`${screenSize.width < 1024 ? 'h-full' : 'overflow-hidden '} w-full bg-[#233D4D]/[0.1] `}>
        <Menu />

        <Routes>
          {screenSize.width < 1024 ?
            <Route path='/React_E-bank/' element={<Dashboard />} />
            :
            <Route path='/React_E-bank/' element={<Admin />} />
          }
          <Route path='/transfer' element={<Transfer />} />
          <Route path='/create' element={<CreateAccount />} />
          <Route path='/accounts/:userId' element={<Account />} />
        </Routes>
      </div >
    </>

  );
}

export default App;
