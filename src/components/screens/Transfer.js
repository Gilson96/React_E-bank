import { useState, useEffect } from 'react'
import axios from 'axios';
import Button from '../UI/Button';
import Card from '../UI/Card';
import SuccessText from '../UI/SuccessText';

const Transfer = () => {
  // const dispatch = useDispatch();
  // const account = useSelector(selectCreated)
  const [getFromId, setGetFromId] = useState(0)
  const [amountToTansfer, setAmountToTransfer] = useState(0)
  const [getToId, setGetToId] = useState(0);
  const [userAccount, setUserAccount] = useState()
  const [loading, setLoading] = useState(false)
  const [successText, setSuccessText] = useState(false)


  // gets amount to be transfer
  const handleChangeAmountToTransfer = e => {
    setAmountToTransfer(e.target.value)
  }

  // gets id from the selected account
  const handleChangeGetFromId = e => {
    setGetFromId(e.target.value)
  }

  // gets id to the selected account
  const handleChangeGetToId = e => {
    setGetToId(e.target.value)
  }

  // handles the withdraw of the selected account
  // const handleWithdraw = () => {
  //   return (userAccount.find(acc => acc.id === parseInt(getFromId)).balance - parseInt(amountToTansfer));
  // }

  // const handleDeposit = () => {
  //   return (userAccount.find(acc => acc.id === parseInt(getToId)).balance + parseInt(amountToTansfer));
  // }


  const handleSubmit = e => {
    e.preventDefault();

   axios.put(`https://rocketbank-api.onrender.com/accounts/${parseInt(getFromId)}`, {
      balance: userAccount.find(acc => acc.id === parseInt(getFromId)).balance - parseInt(amountToTansfer)
    })

    axios.put(`https://rocketbank-api.onrender.com/accounts/${parseInt(getToId)}`, {
      balance: userAccount.find(acc => acc.id === parseInt(getToId)).balance + parseInt(amountToTansfer)
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

      {successText && <SuccessText/>}

      <Card classname='flex flex-col h-auto w-11/12 bg-[rgb(224,224,206)] p-4 justify-start'>
        <h1 className='w-full justify-start p-3 uppercase text-2xl'>Transfer Funds</h1>

        <form onSubmit={handleSubmit} className='flex flex-col w-full justify-center items-center'>

          <h1 className='w-[95%] text-left text-sm font-bold uppercase my-2'>From</h1>
          <select
            id='selex'
            className='flex w-[95%] h-20 border p-3 text-md rounded-lg font-bold'
            value={getFromId}
            onChange={handleChangeGetFromId}
          >
            {!loading? 'loading' : userAccount.map((data, index) => (

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

          <span className='text-left my-3 w-[95%] h-0.5 bg-[#AD343E]'></span>

          <h1 className='w-[95%] text-left text-sm font-bold uppercase my-2'>To</h1>
          <select
            className='flex w-[95%] h-20 border p-3 text-md rounded-lg font-bold'
            value={getToId}
            onChange={handleChangeGetToId}
          >
            {!loading? 'loading' : userAccount.map((data, index) => (

              <option
                className='text-md font-bold w-full'
                value={data.id}
              >
                {data.firstName} #{data.id} - £{data.balance}

              </option>

            ))}
          </select>

          <Button
            classname={'hover:bg-[#AD343E] w-1/2 p-3 font-bold uppercase mt-5'}
            id={'buttonBg'}

          >
            Transfer Funds
          </Button>
        </form>
      </Card>
    </section >
  )
}

export default Transfer