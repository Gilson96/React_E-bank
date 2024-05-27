import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { accountActions, selectCreated } from '../features/accountSlice';
import Button from './Button';

const Form = ({title, buttonText, children ,id}) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        // built-in feature that helps
        // retrieving the form values
       const formData = new FormData(e.target)
       const userData = Object.fromEntries(formData.entries()); // {firstName: Gilson}

        dispatch(accountActions.updateAccount({
        someId: userData.find(acc => acc.id === id).id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        balance: userData.balance,
        type: userData.type,
        isAdmin: false,
      }))

      console.log(userData)
    }
    

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full justify-center items-center'>
        <h2>{title}</h2>
        {children}
        
    </form>
  )
}

export default Form