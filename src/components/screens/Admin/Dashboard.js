import { useState, useRef } from 'react'
import { useDisclosure, CircularProgress } from '@chakra-ui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import {
    useGetAccountsQuery,
    useDeleteAccountMutation
} from "../../features/apiSlice";
import FeedbackDialog from '../../UI/FeedbackDialog';
import useScreenSize from '../../features/useScreenSize';
import Accounts from './Accounts';

const Dashboard = () => {
    const [getId, setGetId] = useState();
    const [inputValue, setInputValue] = useState('')
    const [feedback, setFeedback] = useState(false)
    const screenSize = useScreenSize()
    const { data: accounts = [], isLoading } = useGetAccountsQuery()
    const searchfirstNames = [...accounts.map(account => account.accountName)]

    const [deleteAccount] = useDeleteAccountMutation(getId);

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleChange = e => setInputValue(e.target.value)

    const initialRef = useRef(null)

    if (isLoading) return <CircularProgress value={30} color='orange.300' thickness='12px' />
    if (!accounts) return <div>Missing accounts</div>

    console.log(getId)
    return (
        <>
            <div className={`${screenSize.width < 1024 && 'p-4'} `}>

                {/* Deleted feedback */}
                {feedback && <FeedbackDialog />}

                <div className='flex justify-between'>
                    <h1 className='font-bold text-2xl ml-2'>All Accounts</h1>

                    <div className='flex mr-[5%]'>
                        {/* <button onClick={forceUpdate}>reload</button> */}
                        <i className='flex items-center bg-white rounded-l-lg p-2'>
                            <MagnifyingGlassIcon className='h-5 w-5 ' />
                        </i>
                        <input
                            type='text'
                            placeholder='search'
                            value={inputValue}
                            onChange={handleChange}
                            width={'30%'}
                            className='rounded-r-lg p-2'
                        />
                    </div>
                </div>

                <div className={`flex flex-col w-full ${screenSize.width >= 1000? 'h-[28rem]' : 'h-full'} gap-2 overflow-y-auto`}>

                    {searchfirstNames.includes(inputValue) ?
                        accounts.filter(account => account.accountName === inputValue).map(account =>
                            <Accounts
                                account={account}
                                onOpen={onOpen}
                                isOpen={isOpen}
                                onClose={onClose}
                                setGetId={setGetId}
                                setFeedback={setFeedback}
                                deleteAccount={deleteAccount}
                                getId={getId}
                                initialRef={initialRef}
                            />
                        )
                        :
                        accounts.map(account => (
                            <Accounts
                                account={account}
                                onOpen={onOpen}
                                isOpen={isOpen}
                                onClose={onClose}
                                setGetId={setGetId}
                                setFeedback={setFeedback}
                                deleteAccount={deleteAccount}
                                getId={getId}
                                initialRef={initialRef}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard

