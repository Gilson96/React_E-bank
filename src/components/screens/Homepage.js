import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { selectCreated } from '../features/accountSlice'
import {
  ChevronRight,
  UserPlusIcon,
  ArrowRightStartOnRectangle
} from '@heroicons/react/24/solid'
import Input from '../UI/Input'
import Logo from '../UI/Logo'
import Button from '../UI/Button'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"

const Homepage = ({ adminlogin }) => {
  const [email, setEmail] = useState('')
  const account = useSelector(selectCreated)
  const nagivate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
      if(account.find(acc => acc.email === email) === undefined){
        console.log('error')
        return false
      }

      if(account.find(acc => acc.email === email).isAdmin){
        nagivate('/admin')
      }

      if(!account.find(acc => acc.email === email).isAdmin){
        nagivate('/client')
      }
  }


  return (
    <section className='flex flex-col items-center justify-center h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col border items-center justify-center border-slate-200 shadow w-96 h-64 p-3'>

        <div className='relative -left-5'>
          <Logo />
        </div>

        <Input
          placeholder={'Email...'}
          type={'email'}
          classname={'w-full relative -left-10'}
          value={email}
          onChange={e => { setEmail(e.target.value) }}
        />

        <Button classname={'w-1/2 hover:bg-[#F2AF29] uppercase font-bold'}>login</Button>

      </form>

    </section>
  )
}

export default Homepage