import React, { useState, useEffect } from 'react'
import { accountActions } from '../features/accountSlice';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card'
import Menu from '../UI/Menu'
import Button from '../UI/Button'
import {
  UserIcon,
  XCircleIcon

} from '@heroicons/react/24/outline';
import axios from 'axios'

const Admin = () => {
  const dispatch = useDispatch();
  const [accountId, setAccountId] = useState()
  const [userAccount, setUserAccount] = useState()
  const [loading, setLoading] = useState(false)
  const [toggle, setToggle] = useState(false)

  const handleDeleteAccount = () => {
    dispatch(accountActions.deleteAccount({ someId: accountId }))
  }

  useEffect(() => {
    axios.get("http://localhost:9000/accounts/").then(({ data }) => {
      setUserAccount(data);
      setLoading(true)
    })
  }, []);

  console.log(userAccount)

  return (
    <>
      <section className='flex w-full h-full'>

        <Menu />
        <div className='flex flex-col w-full overflow-y-auto gap-3 my-3'>
          <h1 className='mx-3 text-[#AD343E]'>Accounts</h1>
          {userAccount.filter(data => data.id > 0).map(data => (
            <Card classname='h-auto bg-[#E0E0CE]'>
              <div className='flex flex-col w-full h-full p-3'>
                <h3 className='my-1uppercase text-xl italic font-bold'>Name: <span className='font-light'>{data.firstName}</span></h3>
                <p className='my-1 uppercase text-xs italic font-bold'>Account type: <span className='font-light'>{data.type}</span></p>
                <p className='my-1 uppercase text-xs italic font-bold'>Account ID: <span className='font-light'>#{data.id}</span></p>
                <p className='m-0 mr-2 text-right text-3xl font-bold'>£{data.balance}</p>

                <div className='flex gap-2'>
                  <Button className="h-10 w-auto border border-slate-200 shadow bg-white items-center justify-center rounded p-2 hover:bg-[#F2AF29]">
                    <p className='flex items-center justify-center h-full w-full font-bold'>
                      <UserIcon className='h-5 w-5' />
                      Edit
                    </p>
                  </Button>
                  <Button className="h-10 w-auto border border-slate-200 shadow bg-white items-center justify-center rounded p-2">
                    <p className='flex items-center justify-center h-full w-full font-bold'>
                      <XCircleIcon className='h-5 w-5' />
                      Delete
                    </p>
                  </Button>
                </div>
              </div>
            </Card>
          ))}

        </div>
        {/* {
            !loading ? "loading" : userAccount.map((data, index) => (

              <>
                <div
                  className='flex flex-col items-start border border-slate-200 rounded shadow-lg w-full h-64 p-10 my-7 gap-3 cursor-pointer hover:translate-y-1'
                  onClick={() => { setAccountId(data.id) }}

                >
                  <h1 className='text-xl font-bold'>{data.firstName}</h1>
                  <p className='text-lg font-bold text-orange-300'>{data.type}</p>
                  <p className='text-md italic'>ID: {data.id}</p>
                  <p className='text-xl w-full text-right'>£ {data.balance}</p>
                  <div className='flex gap-5'>
                    <button
                      className='border border-slate-300 w-20 h-9 rounded-lg shadow-md z-[9999999]'
                      onClick={() => { setToggle(true) }}
                    >
                      Edit
                    </button>
                    <button
                      className='border border-slate-300 w-20 h-9 rounded-lg shadow-md'
                      onClick={() => {
                        return (
                          handleDeleteAccount()
                        )
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            ))
          } */}

        {/* {toggle && <EditAccount id={accountId} />}
        {!toggle && <Welcome />} */}
      </section>
    </>
  )
}

export default Admin