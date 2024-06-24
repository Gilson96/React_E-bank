import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import SuccessText from '../UI/SuccessText';
import Button from '../UI/Button';
import Card from '../UI/Card';
import useScreenSize from '../features/useScreenSize';

const Deposit = () => {
  // const account = useSelector(selectCreated)
  const [amountToTansfer, setAmountToTransfer] = useState(0)
  const [getFromId, setGetFromId] = useState(0);
  const [userAccount, setUserAccount] = useState()
  const [loading, setLoading] = useState(false)
  const [successText, setSuccessText] = useState(false)
  const screenSize = useScreenSize()

  // gets amount to be transfer
  const handleChangeAmountToTransfer = e => {
    setAmountToTransfer(e.target.value)
  }

  // gets id to the selected account
  const handleChangeGetFromId = e => {
    setGetFromId(e.target.value)
  }

  // const handleDeposit = () => {
  //   return userAccount.find(acc => acc.id === parseInt(getToId)).balance + parseInt(amountToTansfer);
  // }

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(accountActions.updateBalance({ someId: parseInt(getToId), someValue: handleDeposit() }))

    axios.put(`https://rocketbank-api.onrender.com/accounts/${parseInt(getFromId)}`, {
      balance: userAccount.find(acc => acc.id === parseInt(getFromId)).balance - parseInt(amountToTansfer)
    })
    setSuccessText(true)
  }

  useEffect(() => {
    axios.get("https://rocketbank-api.onrender.com/accounts/").then(({ data }) => {
      setUserAccount(data);
      setLoading(true)
    })
  }, []);



  return (
    <section className='flex flex-col justify-center items-center w-full'>

      {successText && <SuccessText />}

      <Card classname='flex flex-col h-auto w-11/12 bg-[rgb(224,224,206)] p-4 justify-start'>

        <h1 className={`w-full justify-start p-3 uppercase ${screenSize.width < 1024? 'text-xl' : 'text-2xl'} font-bold`}>withdraw funds</h1>


        <form onSubmit={handleSubmit} className='flex flex-col w-full justify-center items-center'>

          <h1 className='w-[95%] text-left text-sm font-bold uppercase my-2'>From</h1>
          <select
            id='selex'
            className='flex w-[95%] h-20 border p-3 text-md rounded-lg font-bold'
            value={getFromId}
            onChange={handleChangeGetFromId}
          >
            {!loading ? 'loading' : userAccount.map((data, index) => (

              <option
                className='text-md font-bold w-full'
                value={data.id}
              >
                {data.firstName} #{data.id} - £{data.balance}

              </option>

            ))}
          </select>

          <span className='text-left my-3 w-[95%] h-0.5 bg-[#AD343E]'></span>

          <label className='w-[95%] text-left text-sm font-bold uppercase my-2'>Amout to Transfer</label>
          <input
            type='number'
            className='w-[95%] border border-slate-300 p-2 text-right'
            min={0}
            required
            onChange={handleChangeAmountToTransfer}
          />

          <Button
            classname={` ${screenSize.width < 1024? 'w-auto' : 'w-1/2'}hover:bg-[#AD343E]  p-3 font-bold uppercase mt-5`}
            id={'buttonBg'}

          >
            Withdraw Funds
          </Button>
        </form>
      </Card>
    </section >
  )
}

export default Deposit