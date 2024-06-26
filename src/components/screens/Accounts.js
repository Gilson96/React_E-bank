import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { accountActions } from '../features/accountSlice';
import { useDispatch } from 'react-redux';
import {
    UserIcon,
    XCircleIcon
} from '@heroicons/react/24/outline';
import Card from '../UI/Card'
import Button from '../UI/Button'
import EditAccount from '../screens/EditAccount'
import useScreenSize from '../features/useScreenSize'

const Accounts = () => {

    const [accountId, setAccountId] = useState()
    const [userAccount, setUserAccount] = useState()
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false);
    const screenSize = useScreenSize()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteAccount = () => {
        axios.delete(`https://rocketbank-api.onrender.com/accounts/${accountId}`)
            .then(response => {
                console.log(`Deleted post with ID ${accountId}`);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        axios.get("https://rocketbank-api.onrender.com/accounts/").then(({ data }) => {
            setUserAccount(data);
            setLoading(true)
        })
    }, []);

    
    return (
        <div className='flex flex-col gap-3 w-full'>
            <h1 className='w-full ml-2 p-2 font-bold text-4xl'>Accounts</h1>

            <EditAccount
                id={accountId}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
            />

            {!loading ? 'loading' : userAccount.filter(data => data.id > 0).map(data => (
                <>
                    <Card classname='h-auto w-full bg-[#E0E0CE]'>
                        <div className='flex flex-col w-full h-full p-3'>
                            <h3 className='my-1 uppercase text-xl italic font-bold'>Name: <span className='font-light'>{data.firstName}</span></h3>
                            <p className='my-1 uppercase text-xs italic font-bold'>Account type: <span className='font-light'>{data.type}</span></p>
                            <p className='my-1 uppercase text-xs italic font-bold'>Account ID: <span className='font-light'>#{data.id}</span></p>
                            <p className={`${screenSize.width < 1024? 'text-lg' : 'text-3xl'} m-0 mr-2 text-right  font-bold`}>£{data.balance}</p>

                            <div className={`flex gap-2`}>
                                <Button
                                    id='buttonBg'
                                    onClick={() => {
                                        handleShow();
                                        setAccountId(data.id)
                                    }}
                                    classname={`${screenSize.width < 1024? 'w-auto  h-10 mt-3' : 'w-[12%]'}  h-14 rounded-xl`}
                                >
                                    <p className='flex items-center justify-center h-full w-full font-bold '>
                                        <UserIcon className='h-5 w-5' />
                                        Edit
                                    </p>
                                </Button>
                                <Button
                                    id='buttonBg'
                                    onClick={() => {
                                       setAccountId(data.id);
                                       handleDeleteAccount()
                                        
                                    }}
                                    classname={`${screenSize.width < 1024? 'w-auto  h-10 mt-3' : 'w-[12%]'}  h-14 rounded-xl`}
                                >
                                    <p className='flex items-center justify-center h-full w-full font-bold'>
                                        <XCircleIcon className='h-5 w-5' />
                                        Delete
                                    </p>
                                </Button>
                            </div>

                        </div>
                    </Card>
                </>
            ))}</div>
    )
}

export default Accounts