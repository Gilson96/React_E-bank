import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCreated } from '../features/accountSlice'
import { Link } from 'react-router-dom'
import { accountActions } from '../features/accountSlice';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Withdraw = () => {
  const dispatch = useDispatch();
  const account = useSelector(selectCreated)
  const [amountToTansfer, setAmountToTransfer] = useState(0)
  const [getFromId, setGetFromId] = useState(0);

  // gets amount From be transfer
  const handleChangeAmountToTransfer = e => {
    setAmountToTransfer(e.target.value)
  }


  // gets id From the selected account
  const handleChangeGetFromId = e => {
    setGetFromId(e.target.value)
  }


   // handles the withdraw of the selected account
   const handleWithdraw = () => {
    return (account.find(acc => acc.id === parseInt(getFromId)).balance - parseInt(amountToTansfer));
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(accountActions.updateBalance({ someId: parseInt(getFromId), someValue: handleWithdraw() }))
    
  }

  console.log(account)

  return (
    <section className='flex flex-col justify-center items-center w-full'>
      <div className='flex flex-col items-center border border-slate-200 rounded shadow-lg w-11/12 h-auto p-10 my-7 gap-5 justify-center'>
        <Link to={"/admin"} className='flex w-full justify-end'>
          <button className='flex w-24 h-12 justify-evenly items-center rounded bg-orange-300 font-bold text-white uppercase border shadow'>
            <span><ArrowLeftIcon className='w-5 h-5 text-white' /></span>
            back
          </button>
        </Link>
        <h1 className='w-full text-left text-xl font-bold uppercase'>withdraw funds</h1>
        <span className='text-left my-3 w-full h-0.5 bg-orange-100'></span>

        <form onSubmit={handleSubmit} className='flex flex-col w-full justify-center items-center'>
        <h1 className='w-1/2 text-left text-sm font-bold uppercase my-2'>From</h1>
        <select 
          id='selex'
          className='flex w-1/2 h-20 border p-3 text-md rounded-lg'
          value={getFromId}
          onChange={handleChangeGetFromId}
        >
          {account.map((data, index) => (

            <option
              className='text-md w-full'
              value={data.id}
            >
              {data.firstName} #{data.id}

            </option>

          ))}
        </select>
        
        <span className='w-1/2 text-left my-5 h-0.5  '></span>
          <label className='w-1/2 text-left text-sm font-bold uppercase my-2'>Amout to Transfer</label>
          <input
            type='number'
            className='w-1/2 border border-slate-300 p-2 text-right'
            onChange={handleChangeAmountToTransfer}
          />
          <span className='w-1/2 text-left my-5 h-0.5 bg-orange-100 '></span>

       
          <button onSubmit={handleSubmit} className='w-1/2 my-8 h-12 border border-slate-100 rounded-md shadow font-bold hover:bg-orange-300 hover:text-white p-2 uppercase'>Withdraw Funds</button>
        </form>
      </div>

    </section >
  )
}

export default Withdraw