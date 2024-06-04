import './App.css';
import {
  Route,
  Routes
} from 'react-router-dom'
import HomePage from './components/screens/Homepage'
import Client from './components/screens/Client';
import Admin from './components/screens/Admin'
import CreateAccount from './components/screens/CreateAccount'
import Transfer from './components/screens/Transfer'
import Deposit from './components/screens/Deposit'
import Withdraw from './components/screens/Withdraw'
import EditAccount from './components/screens/EditAccount';

function App() {
  return (
    <>

      <div className='h-screen w-full'>
        <Routes>
          <Route path='/React_E-bank' element={<HomePage />} />
          <Route path='/client' element={<Client />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/create' element={<CreateAccount />} />
          <Route path='/transfer' element={<Transfer />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path="/edit" element={<EditAccount />} />
          
        </Routes>
      </div>
    </>

  );
}

export default App;
