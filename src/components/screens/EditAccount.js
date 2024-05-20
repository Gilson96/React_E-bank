import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { accountActions } from '../features/accountSlice';
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { selectCreated } from '../features/accountSlice'

const EditAccount = ({ id }) => {
  const dispatch = useDispatch();
  const account = useSelector(selectCreated)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [balance, setBalance] = useState(0)
  const [type, setType] = useState('')
  const [error, setError] = useState(true)
  const [errorText, setErrorText] = useState('')

  const handleChangeFirstName = e => {
    const value = e.target.value
    setFirstName(value)
    if (!value.trim()) {
      setError(true)
    } else {
      setError(false);
    }
  }

  const handleChangeLastName = e => {
    const value = e.target.value
    setLastName(value)
    if (!value.trim()) {
      setError(true)
    } else {
      setError(false);
    }
  }


  const handleChangeEmail = e => {
    const value = e.target.value
    setEmail(value)
    if (!value.trim()) {
      setError(true)
    } else {
      setError(false);
    }
  }

  const handleChangePassword = e => {
    const value = e.target.value
    setPassword(value)
    if (!value.trim()) {
      setError(true)
    } else {
      setError(false);
    }
  }

  const handleChangeBalance = e => {
    const value = e.target.value
    setBalance(value)
    if (!value.trim()) {
      setError(true)
    } else {
      setError(false);
    }
  }

  const handleChangeType = e => {
    const value = e.target.value
    setType(value)
    if (!value.trim()) {
      setError(true)
    } else {
      setError(false);
    }
  }


  const handleSubmit = e => {
    e.preventDefault();
    if (error 
      || !firstName.trim()
      || !lastName.trim()
      || !balance === null
      || !type.trim()
      || !email.trim()
      || !password.trim()
    ) {
      setErrorText('This field is required')
      return false
    } else {
      dispatch(accountActions.updateAccount({
        someId: account.find(acc => acc.id === id).id,
        FirstName: firstName,
        LastName: lastName,
        Balance: balance,
        Type: type,
        Email: email,
        Password: password
      }))
    } 
  }


  return (
    <div className='flex flex-col items-center border border-slate-200 rounded shadow-lg w-1/2 h-auto p-10 my-7 mr-14 gap-5 justify-center flex-wrap bg-white'>
      <h1 className='w-full text-left text-2xl font-bold'>Edit Account {account.find(acc => acc.id === id).id}</h1>
      <span className='text-left my-3 w-full h-0.5 bg-orange-100'></span>

      <form
        className='flex flex-wrap w-full justify-center items-center'
        onSubmit={handleSubmit}
      >
        <label className='w-1/2 text-left text-sm font-bold uppercase my-2'>First Name</label>
        <input
          type='text'
          className='w-1/2 border border-slate-200 p-2'
          onChange={handleChangeFirstName}
          value={firstName}
          placeholder={account.find(acc => acc.id === id).firstName}
        />
        <label className='w-1/2 text-left text-sm font-bold uppercase my-2'>Last Name</label>
        <input
          type='text'
          className='w-1/2 border border-slate-200 p-2' onChange={handleChangeLastName}
          value={lastName}
          placeholder={account.find(acc => acc.id === id).lastName} />


        <span className='my-3 w-96 h-0.5 bg-orange-100'></span>

        <label className='w-1/2 text-left text-sm font-bold uppercase my-2'>Initial Balance</label>
        <input
          type='number'
          className='w-1/2 border border-slate-200 p-2' onChange={handleChangeBalance}
          placeholder={'£' + account.find(acc => acc.id === id).balance}
        />

        <h1 className='w-1/2 text-left text-sm font-bold uppercase my-2'>Account type</h1>
        <input
          type='text'
          className='w-1/2 border border-slate-200 p-2'
          onChange={handleChangeType}
          placeholder={account.find(acc => acc.id === id).type}
        />

        <span className='my-3 w-96 h-0.5 bg-orange-100'></span>

        {/* <h1 className='mt-5 mb-2 font-bold text-sm uppercase'>Initial transaction</h1>
          <label className='text-sm font-bold uppercase'>Description</label>
          <input type='text' className='w-full border border-slate-200 p-2' onChange={handleChangeSe} />
          <label className='text-sm font-bold uppercase'>Amount</label>
          <input type='number' className='w-full border border-slate-200 p-2' onChange={handleChangeSe} /> */}

        <label className='w-1/2 text-left text-sm font-bold uppercase my-2'>email address</label>
        <input
          type='email'
          className='w-1/2 border border-slate-200 p-2' onChange={handleChangeEmail}
          placeholder={account.find(acc => acc.id === id).email}
        />
        <span className='my-3 w-96 h-0.5'></span>
        <label className='w-1/2 text-left text-sm font-bold uppercase my-2'>Password</label>
        <input
          type='password'
          className='w-1/2 border border-slate-200 p-2' onChange={handleChangePassword}
          placeholder='****'
        />
        {error && <p>{error}</p>}
        <button type='submit' className='w-1/2 my-8 h-12 border border-slate-100 rounded-md shadow font-bold hover:bg-orange-300 hover:text-white p-2 uppercase '>Edit Account</button>
      </form>

    </div>
  )
}

export default EditAccount