import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    CircularProgress
} from '@chakra-ui/react'
import useScreenSize from '../../features/useScreenSize'
import { useParams } from 'react-router-dom';
import { useGetTransactionQuery } from '../../features/apiSlice'

const Transactions = () => {
    let { userId } = useParams()
    const { data: transaction = [], isLoading } = useGetTransactionQuery(parseInt(userId))
    const screenSize = useScreenSize()
    
    if (isLoading) return <CircularProgress value={30} color='orange.300' thickness='12px' />
    if (!transaction) return <div>Missing accounts</div>

    return (
        <>
            {screenSize.width < 1024 ?

                transaction.transactions.map(trans => (
                    <div className='flex flex-col gap-1'>
                        <div className='flex justify-between bg-[#233D4D]/[0.1] text-xs uppercase font-bold'>
                            <p className=''>{trans.date.slice(0, 10)}</p>
                            <p className=''>(£)Amount</p>
                        </div>
                        <div className='flex justify-between my-2'>
                            <p>{trans.description}</p>
                            <p>{trans.amount}</p>
                        </div>
                    </div>
                ))

                :

                <TableContainer className='h-auto' overflowY={'auto'}>
                    <Table variant='simple'>

                        <Thead>
                            <Tr>
                                <Th>Date</Th>
                                <Th>Description</Th>
                                <Th isNumeric>trans id</Th>
                                <Th isNumeric>(£)amount</Th>
                            </Tr>
                        </Thead>


                        <Tbody>
                            {transaction.transactions.map(trans => (
                                <Tr>
                                    <Td className='flex flex-col'>
                                        <p>
                                            {trans.date.slice(0, 10)}
                                        </p>
                                        <p>
                                            {trans.date.slice(11, 19)}
                                        </p>
                                    </Td>
                                    <Td className='truncate ...'><p>{trans.description}</p></Td>
                                    <Td isNumeric>{trans.id}</Td>
                                    <Td isNumeric>{trans.amount}</Td>
                                </Tr>
                            ))}
                        </Tbody>


                    </Table>
                </TableContainer>

            }
        </>
    )
}

export default Transactions