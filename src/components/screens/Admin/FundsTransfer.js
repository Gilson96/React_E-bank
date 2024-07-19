import React from 'react'
import {
    FormControl,
    FormLabel,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import { CurrencyPoundIcon } from '@heroicons/react/24/outline';
import useScreenSize from '../../features/useScreenSize';

const FundsTransfer = ({ fromAccount, toAccount, editAccount, fromId, setFeedback, setFromId, accounts, toId, setToId, feedback }) => {
    const screenSize = useScreenSize()
    const handleSubmit = (e) => {
        e.preventDefault();

        // built-in feature that helps
        // retrieving the form values
        const formData = new FormData(e.target)
        const userData = Object.fromEntries(formData.entries()); // {firstName: Gilson}

        const amountToTransfer = userData

        const sendAmount = fromAccount.balance - parseInt(amountToTransfer.balance)

        const receiveAmount = toAccount.balance + parseInt(amountToTransfer.balance)

        const fromNewBalance = { balance: sendAmount }
        const toNewBalance = { balance: receiveAmount }

        if (editAccount({ id: fromId, balance: fromNewBalance.balance }) && editAccount({ id: toId, balance: toNewBalance.balance })) {
            setFeedback(true)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>From</FormLabel>
                <Select
                    placeholder='Select account'
                    value={fromId}
                    onChange={e => { setFromId(e.target.value) }}
                >
                    {accounts.map(account => (
                        <option value={account.id}>{account.accountName} | #{account.id}</option>
                    ))}
                </Select>
            </FormControl>

            <FormControl>
                <FormLabel>To</FormLabel>
                <Select
                    placeholder='Select account'
                    value={toId}
                    onChange={e => { setToId(e.target.value) }}
                >
                    {accounts.map(account => (
                        <option value={account.id}>{account.accountName} | <span className='font-bold'>#{account.id}</span></option>
                    ))}
                </Select>
            </FormControl>

            <FormControl className='mt-3' isRequired>
                <FormLabel>Amount</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <CurrencyPoundIcon className='h-6 w-6 text-gray-400' />
                    </InputLeftElement>
                    <NumberInput allowMouseWheel defaultValue={0} min={0} className='w-[27rem]'>
                        <NumberInputField className='pl-5' name='balance' />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
            </FormControl>

            <hr className='text-slate-200 h-1 w-[98%] mt-3' />

            <button className={`${feedback ? 'bg-gray-200' : 'bg-[#F2AF29]'} py-2 px-2.5 text-white  ${screenSize.width < 1024? 'w-[30%]' : 'w-[30%]'} rounded`} disabled={feedback ? true : false} >
                Submit
            </button>

        </form>
    )
}

export default FundsTransfer