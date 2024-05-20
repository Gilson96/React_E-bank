import { useState, useEffect, useRef } from 'react'
import { accountActions, selectCreated } from '../features/accountSlice';
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { basicSchema } from '../formValidation';
import Form from '../UI/Form';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Card from '../UI/Card';


const CreateAccount = () => {
  const account = useSelector(selectCreated);
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (submitted) {
      axios.post('http://localhost:9000/accounts/', {
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
    }
  }, [])


  return (
    <section className='flex flex-col justify-center items-center w-full'>

      <Card>
        <Link to={"/admin"} className='flex w-full justify-end'>
          <Button>
            <span>
              <ArrowLeftIcon className='w-5 h-5 text-white' />
            </span>
            back
          </Button>
        </Link>

        <h1 className='w-full text-left text-2xl font-bold'>Create Account</h1>

        <span className='text-left my-3 w-full h-0.5 bg-orange-100'></span>

        <Form>
          <Input
            label='First Name'
            type='text'
            id='firstName'
          />
          <Input
            label='Last Name'
            type='text'
            id='lastName'
          />
          <span className='my-3 w-96 h-0.5 bg-orange-100'></span>
          <Input
            label='Email'
            type='email'
            id='email'
          />
          <Input
            label='Password'
            type='password'
            id='password'
          />
          <span className='my-3 w-96 h-0.5 bg-orange-100'></span>
          <Input
            label='Initial Balance'
            type='number'
            id='balance'
          />
          <Input
            label='Account type'
            type='text'
            id='type'
          />
          <Button
            onClick={() => { setSubmitted(true) }}
          >Create Account</Button>
        </Form>
      </Card>
    </section>
  )
}

export default CreateAccount