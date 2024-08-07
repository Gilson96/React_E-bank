import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

const FeedbackDialog = () => {
    return (
        <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            position='fixed'
            width='50%'
            zIndex={9999}
            className='rounded top-1'
        >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                Account deleted
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                Refresh to see the magic
            </AlertDescription>
        </Alert>
    )
}

export default FeedbackDialog