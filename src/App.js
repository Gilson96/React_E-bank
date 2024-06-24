import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import Admin from './components/screens/Admin'
import Logo from './components/UI/Logo'
import 'animate.css';


function App() {
  const [userAccount, setUserAccount] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios.get("https://rocketbank-api.onrender.com/accounts/").then(({ data }) => {
      setUserAccount(data);
      setLoading(true)
    })
  }, []);

  return (
    <>

      <div className='flex justify-center items-center h-screen w-full'>
        {!loading ?
          <div className='flex '>
            <Logo logoClass={'animate__animated animate__bounce animate__infinite'}/>
          </div>
          :
          <Admin />
        }

      </div>
    </>

  );
}

export default App;
