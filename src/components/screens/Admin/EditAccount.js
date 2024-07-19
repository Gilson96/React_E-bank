import { useState } from 'react'
import { Formik, Field } from "formik";
import {
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Divider,
    Button,
    Alert,
    AlertIcon,
    CircularProgress,
} from '@chakra-ui/react'
import { useUpdateAccountMutation, useGetAccountQuery } from '../../features/apiSlice'

const EditAccount = ({ initialRef, isOpen, onClose, id }) => {
    const [feedBack, setFeedBack] = useState(false)
    const [editAccount] = useUpdateAccountMutation()
    const { data: account = [], isLoading } = useGetAccountQuery(id)

    if (isLoading) return <CircularProgress value={30} color='orange.300' thickness='12px' />

    return (
        <>
            <div>
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    initialFocusRef={initialRef}
                    
                >
                    <ModalOverlay />
                    <ModalContent width={'90%'}>
                        <ModalHeader fontWeight={'bold'}>Edit Account</ModalHeader>
                        <ModalCloseButton />
                        <Divider />
                        <ModalBody >
                            {/* Submit feedback message */}
                            {feedBack && <Alert status='success'>
                                <AlertIcon />
                                Data has been edited. Go back and refresh!
                            </Alert>}
                            <Formik
                                initialValues={{
                                    accountName: "",
                                    email: "",
                                    password: "",
                                }}

                                onSubmit={(values) => {
                                    if (values.accountName === '') { values.accountName = account.accountName }
                                    if (values.email === '') { values.email = account.email }
                                    if (values.password === '') { values.password = account.password }

                                    if (editAccount({ id: account.id, body: values })) {
                                        setFeedBack(true)
                                    }
                                }}
                            >
                                {({ handleSubmit }) => (
                                    <form onSubmit={handleSubmit} >
                                        <FormControl>
                                            <FormLabel htmlFor='accountName'>Account Name</FormLabel>
                                            <Field
                                                as={Input}
                                                id="accountName"
                                                type="text"
                                                name="accountName"
                                                variant="outline"
                                            />
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel htmlFor='email'>Email</FormLabel>
                                            <Field
                                                as={Input}
                                                id="email"
                                                type="text"
                                                name="email"
                                                variant="outline"
                                            />
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel htmlFor='password'>Password</FormLabel>
                                            <Field
                                                as={Input}
                                                id="password"
                                                type="password"
                                                name="password"
                                                variant="outline"

                                            />
                                        </FormControl>


                                        <ModalFooter display={'flex'} gap={'1rem'} >
                                            <button className='bg-[#F2AF29] py-2 px-2.5 text-white w-auto rounded hover:bg-[]' type="submit" disabled={feedBack ? true : false} >
                                                Submit
                                            </button>
                                            <Button colorScheme='#233D4D'
                                                className='bg-[#233D4D]'
                                                mr={3} onClick={onClose}>
                                                Close
                                            </Button>
                                        </ModalFooter>
                                    </form>
                                )}
                            </Formik>
                        </ModalBody>
                    </ModalContent>

                </Modal >
            </div>
        </>
    )

}

export default EditAccount