import { useState, useEffect } from 'react'
import { selectCreated } from '../features/accountSlice';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Card from '../UI/Card';
import CreateForm from '../UI/CreateForm'
import useScreenSize from '../features/useScreenSize';

const CreateAccount = () => {
  const account = useSelector(selectCreated);
  const [submitted, setSubmitted] = useState(false)
  const [successText, setSuccessText] = useState(false)
  const screenSize = useScreenSize()

  useEffect(() => {
    if (submitted) {
      axios.post('https://rocketbank-api.onrender.com/accounts/', {
        id: account[account.length - 1].id,
        firstName: account[account.length - 1].firstName,
        lastName: account[account.length - 1].lastName,
        emailName: account[account.length - 1].email,
        password: account[account.length - 1].password,
        balance: account[account.length - 1].balance,
        type: account[account.length - 1].type,
        isAdmin: account[account.length - 1].isAdmin
      })
      setSubmitted(false)
      setSuccessText(true)
    }
  }, [submitted, account])


  return (
    <section className='flex flex-col justify-center items-center w-full'>

      {successText && <div className='flex items-center justify-center w-1/4 h-14 bg-green-300 rounded border border-green-500 z-[9999999] absolute top-3'><p className='text-green-600'>Submitted</p></div>}

      <Card classname='h-auto w-11/12 bg-[rgb(224,224,206)] p-4'>
        
        <CreateForm
          title={'Create Account'}
          buttonText={'create account'}
          classname={'w-full'}
        >
          <Input
            label='First Name'
            type='text'
            id='firstName'
            classname={'w-full'}
          />
          <Input
            label='Last Name'
            type='text'
            id='lasttName'
            classname={'w-full'}
          />

          <span className='text-left my-3 w-[95%] h-0.5 bg-[#AD343E]'></span>

          <Input
            label='Email'
            type='email'
            id='email'
            classname={'w-full'}
          />
          <Input
            label='Password'
            type='password'
            id='password'
            classname={'w-full'}
          />
          
          <span className='text-left my-3 w-[95%] h-0.5 bg-[#AD343E]'></span>

          <Input
            label='Initial Balance'
            type='number'
            id='balance'
            classname={'w-full'}
            min='0'
          />
          <Input
            label='Account type'
            type='text'
            id='type'
            placeholder='Current or Saving...'
            classname={'w-full italic'}
          />
          <Button
            classname={` ${screenSize.width < 1024? 'w-auto' : 'w-1/2'}hover:bg-[#AD343E]  p-3 font-bold uppercase mt-5`}
            id={'buttonBg'}
            onClick={() => { setSubmitted(true) }}
          >
            Create Account
          </Button>
        </CreateForm>
      </Card>
    </section>
  )
}

export default CreateAccount