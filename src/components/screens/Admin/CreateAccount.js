import { useState } from 'react'
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Card,
  Alert,
  AlertIcon,
  Divider
} from '@chakra-ui/react'
import {
  UserIcon,
  EnvelopeIcon,
  KeyIcon,
} from '@heroicons/react/24/outline'
import { useCreateAccountMutation } from '../../features/apiSlice'
import useScreenSize from '../../features/useScreenSize'

const CreateAccount = ({ initialRef, isOpen, onClose, }) => {
  const [feedback, setFeedback] = useState(false)
  const screenSize = useScreenSize()
  const [createAccount] = useCreateAccountMutation()

  const handleSubmit = (e) => {
    e.preventDefault();
    // built-in feature that helps
    // retrieving the form values
    const formData = new FormData(e.target)
    const userData = Object.fromEntries(formData.entries()); // {firstName: Gilson}
    const newAccount = { id: Math.floor(Math.random() * 101), ...userData, balance: 0 }

    if (createAccount(newAccount)) {
      setFeedback(true)
    }
    console.log(newAccount)
  }

  return (
    <>
      <div className={` ${screenSize.width < 1024 && 'p-4 h-screen'}`}>
        <h1 className='font-bold text-2xl ml-2'>Add New Account</h1>

        

        <Card className='flex w-[97%] m-2 border border-slate-200 rounded'>
          <div className={`${screenSize.width >= 1024 && 'py-8'}`}>
          {feedback &&
          <Alert position={'relative'} zIndex={'1'} width={'100%'} status='success'>
            <AlertIcon />
            Successfull. Go to All accounts and reload!
          </Alert>
        }
            <form onSubmit={handleSubmit} className='flex flex-col gap-10 py-2 px-4 h-full'>

              <Divider />
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <UserIcon className='h-6 w-6 text-[#233D4D]' />
                  </InputLeftElement>
                  <Input htmlFor='firstName' name='accountName' type='text ' placeholder='Account Name' textColor={'#233D4D'} width={'27rem'} className='py-2 pl-6 text-red-300' borderColor={'#233D4D'} />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    < EnvelopeIcon className='h-6 w-6 text-[#233D4D]' />
                  </InputLeftElement>
                  <Input htmlFor='email' name='email' type='email' placeholder='Email' width={'27rem'} className='py-2 pl-6' borderColor={'#233D4D'} />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <KeyIcon className='h-6 w-6 text-[#233D4D]' />
                  </InputLeftElement>
                  <Input htmlFor='password' name='password' type='password' placeholder='Password' width={'27rem'} min={3} className='py-2' borderColor={'#233D4D'} />
                </InputGroup>
              </FormControl>



              <Divider />

              <div>
                <button className={`${feedback ? 'bg-gray-200' : 'bg-[#F2AF29]'} py-2 px-2.5 text-white ${screenSize.width < 1024 ? 'w-[40%]' : 'w-auto'} rounded`} disabled={feedback ? true : false} >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </>
  )
}
export default CreateAccount
