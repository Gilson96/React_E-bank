import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Divider,
    Box,
    CircularProgress
} from '@chakra-ui/react'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import { useParams } from 'react-router-dom';
import { useGetAccountQuery } from '../../features/apiSlice';
import Transactions from './Transactions';

const Account = () => {
    let { userId } = useParams()
    const { data: account = [], isLoading } = useGetAccountQuery(parseInt(userId))

    if (isLoading) return <CircularProgress value={30} color='orange.300' thickness='12px' />
    if (!account) return <div>Missing accounts</div>

    return (
        <div className={`flex justify-center w-full h-full overflow-hidden mt-3`}>

            <Card className='flex justify-center items-center w-[90%] p-2 mb-2'>

                <CardHeader className='flex justify-between w-full'>
                    <div></div>
                    <Heading size='lg' >{account.firstName} {account.lastName}
                    </Heading>
                    <button><a href='/'><ArrowLeftCircleIcon className='h-7 w-7' /></a></button>
                </CardHeader>

                <CardBody className='flex flex-col w-full gap-3'>
                    <Box className='flex gap-1'>
                        <p className='font-bold italic uppercase text-xs'>Account Number:</p>
                        <p className='text-xs italic'> #{account.id}</p>
                    </Box>
                    <Box className='flex gap-1'>
                        <p className='font-bold italic uppercase text-[0.75rem]'>Balance:</p>
                        <p className='text-[1.3rem] italic w-full text-right'> £{account.balance}</p>
                    </Box>

                    <Divider />
                    <Heading size='sm'>Trasanctions</Heading>
                    <Box>
                        <Transactions />
                    </Box>
                </CardBody>
            </Card>

        </div>
    )
}

export default Account