import { useState } from 'react'
import {
    Card,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Alert,
    AlertIcon,
    CircularProgress
} from '@chakra-ui/react'
import { useGetAccountsQuery, useGetAccountQuery } from "../../features/apiSlice";
import { useUpdateAccountBalanceMutation } from '../../features/apiSlice';
import useScreenSize from '../../features/useScreenSize'
import FundsTransfer from './FundsTransfer';
import Withdraw from './Withdraw'
import Deposit from './Deposit'

const Transfer = () => {
    const [feedback, setFeedback] = useState(false)
    const [editAccount] = useUpdateAccountBalanceMutation()
    const [fromId, setFromId] = useState()
    const [toId, setToId] = useState()
    const { data: accounts = [], isLoading } = useGetAccountsQuery()
    const { data: fromAccount = [] } = useGetAccountQuery(fromId)
    const { data: toAccount = [] } = useGetAccountQuery(toId)
    const screenSize = useScreenSize()

    if (isLoading) return <CircularProgress value={30} color='orange.300' thickness='12px' />
    if (!accounts) return <div>Missing accounts</div>

    return (
        <>
            <div className={`${screenSize.width < 1024 && 'p-4 h-screen'}`}>
                <h1 className='font-bold text-2xl ml-2'>Transfer Funds</h1>

                <Card className='flex w-[97%] m-2 border border-slate-200 rounded gap-2'>
                    {feedback &&
                        <Alert position={'fixed'} zIndex={'99999'} width={'50%'} status='success'>
                            <AlertIcon />
                            Successfull. Reload page and check All accounts!
                        </Alert>
                    }

                    <div className={`${screenSize.width > 1024 && 'py-10'}`}>


                        <Tabs>
                            <TabList className='flex gap-2'>
                                <Tab>{screenSize.width < 1024 ? <p className='text-sm'>Transfer</p> : <p>Transfer Funds</p>}</Tab>
                                <Tab>{screenSize.width < 1024 ? <p className='text-sm'>Deposit</p> : <p>Deposit Funds</p>}</Tab>
                                <Tab>{screenSize.width < 1024 ? <p className='text-sm'>Withdraw</p> : <p>Withdraw Funds</p>}</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <FundsTransfer
                                        fromAccount={fromAccount}
                                        toAccount={toAccount}
                                        editAccount={editAccount}
                                        fromId={fromId}
                                        setFromId={setFromId}
                                        setToId={setToId}
                                        toId={toId}
                                        accounts={accounts}
                                        setFeedback={setFeedback}
                                        feedback={feedback}
                                    />
                                </TabPanel>

                                <TabPanel>
                                    <Deposit
                                        toAccount={toAccount}
                                        toId={toId}
                                        setToId={setToId}
                                        accounts={accounts}
                                        setFeedback={setFeedback}
                                        feedback={feedback}
                                        editAccount={editAccount}
                                    />
                                </TabPanel>

                                <TabPanel>
                                    <Withdraw
                                        fromAccount={fromAccount}
                                        fromId={fromId}
                                        setFromId={setFromId}
                                        accounts={accounts}
                                        setFeedback={setFeedback}
                                        feedback={feedback}
                                        editAccount={editAccount}
                                    />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Transfer