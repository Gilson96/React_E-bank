import React from 'react'
import { useDispatch } from 'react-redux';
import { accountActions } from '../features/accountSlice';

const Form = ({title, buttonText, children, classname}) => {
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // built-in feature that helps
        // retrieving the form values

       const formData = new FormData(e.target)
       const userData = Object.fromEntries(formData.entries()); // {firstName: Gilson}

        dispatch(accountActions.createAccount({
        id: Math.floor((Math.random() * 1000)) + 1,
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