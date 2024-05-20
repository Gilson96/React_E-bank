import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../UI/Navigator'
import {
  ChevronRight,
  UserPlusIcon,
  ArrowRightStartOnRectangle
} from '@heroicons/react/24/solid'
import { Button } from 'react-bootstrap'
import logo from '../../assets/logo.png'
import Input from '../UI/Input'
import NavBar from '../UI/Navigator'

const Homepage = ({ adminlogin }) => {
  const [adminLogin, setAdminLogin] = useState(false)

  return (
    <section className='flex flex-col items-center justify-center h-screen gap-10'>
      <NavBar />
      <div className='flex flex-col border items-center justify-center border-slate-200 shadow-lg w-96 h-auto '>
        <div className='relative -left-5'>
          <div className='flex items-end'>
            <img
              src={logo}
              alt='logo'
              className='h-20 w-20'
            />
            <p id='logoFont' className='text-orange-400 text-xl'>TINYbank</p>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <input className='w-72 h-14 border border-slate-200 shadow-lg p-2' placeholder='username' type='text' />
          <input className='w-72 h-14 border border-slate-200 shadow-lg p-2' placeholder='password' type='text' />
          <Link to='/admin'><button className='w-full h-10 border bg-orange-300 font-bold rounded text-white uppercase mb-4'>Login</button></Link>
        </div>
      </div>

    </section>
  )
}

export default Homepage