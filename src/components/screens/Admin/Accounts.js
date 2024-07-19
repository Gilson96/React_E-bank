import {
    Heading,
    Button,
} from '@chakra-ui/react'
import DeleteButton from '../../UI/deleteButton'
import useScreenSize from '../../features/useScreenSize'
import EditAccount from './EditAccount'

const Accounts = ({ account, onOpen, setGetId, deleteAccount, getId, setFeedback, isOpen, onClose, initialRef, forceUpdate}) => {
   
    const screenSize = useScreenSize()

    return (
        <>
            <div
                key={account.id}
                className='flex flex-col w-[95%] m-2 shadow rounded p-4 bg-white '
            >

                <div className='w-full'>
                    <Heading size='md'>{account.accountName}</Heading>

                    <div className='flex flex-col w-full mt-2'>
                        <p className='italic text-xs mb-2'>Account Number: <span className='font-bold'>#{account.id}</span></p>
                        <p className='flex italic  w-full'>Balance:<span className='w-full text-lg text-right font-bold'>£{account.balance}</span></p>
                    </div>
                </div>
                <hr className='text-slate-200 h-1 my-3' />

                <div className='flex gap-2 w-full'>
                    <Button
                        variant='solid'
                        colorScheme='#F2AF29'
                        className='bg-[#F2AF29]'
                        onClick={() => { onOpen(); setGetId(account.id); }} >
                        {screenSize.width < 1024 ? <p>Edit</p> : <p>Edit Account</p>}
                    </Button>
                    <DeleteButton
                        setGetId={setGetId}
                        id={account.id}
                        deleteId={deleteAccount}
                        userId={getId}
                        setFeedback={setFeedback}
                    />
                    <Button as={'a'} href={`#/accounts/${account.id}`} variant='solid'
                        colorScheme='#233D4D'
                        className='bg-[#233D4D]'
                        textDecoration={'none'}
                    >
                        More...
                    </Button>
                </div>
            </div>
            
                <EditAccount
                    isOpen={isOpen}
                    onClose={onClose}
                    initialRef={initialRef}
                    id={getId}
                />
        
        </>
    )
}

export default Accounts