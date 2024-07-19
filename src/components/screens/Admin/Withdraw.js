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
import {
    CurrencyPoundIcon,
} from '@heroicons/react/24/outline';
import useScreenSize from '../../features/useScreenSize'

const Withdraw = ({ fromAccount, toAccount, editAccount, fromId, setFeedback, setFromId, accounts, feedback }) => {
    const screenSize = useScreenSize()

    const handleSubmit = (e) => {
        e.preventDefault();

        // built-in feature that helps
        // retrieving the form values
        const formData = new FormData(e.target)
        const userData = Object.fromEntries(formData.entries()); // {firstName: Gilson}

        const amountToTransfer = userData

        const sendAmount = fromAccount.balance - parseInt(amountToTransfer.balance)

        const fromNewBalance = { balance: sendAmount }

        if (editAccount({ id: fromId, balance: fromNewBalance.balance })) {
            setFeedback(true)
        }
    }
    return (

        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
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

            <button className={`${feedback ? 'bg-gray-200' : 'bg-[#F2AF29]'} py-2 px-2.5 text-white ${screenSize.width < 1024? 'w-full' : 'w-[30%]'} rounded`} disabled={feedback ? true : false} >
                Submit
            </button>

        </form>
    )
}

export default Withdraw