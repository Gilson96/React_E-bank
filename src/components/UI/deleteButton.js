import {useRef} from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
    Divider
} from '@chakra-ui/react'
import useScreenSize from '../features/useScreenSize';
import { TrashIcon } from '@heroicons/react/24/outline';


const DeleteButton = ({setGetId,id, deleteId, userId, setFeedback, feedback}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    const screenSize = useScreenSize()
    
    console.log(userId)
    return (
        <>
            <Button colorScheme='#FCCA46' className='bg-[#233D4D]' onClick={() => {onOpen(); setGetId(id);}}>
                {screenSize.width < 1024? <TrashIcon className='h-7 w-7'/> : <p>Delete Customer</p>}
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Account
                        </AlertDialogHeader>
                        <Divider/>
                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='#F2AF29' className='bg-[#F2AF29]' onClick={() => {onClose(); deleteId(userId); setFeedback(true);}} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default DeleteButton