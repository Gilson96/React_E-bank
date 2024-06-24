import { useState } from 'react'
import axios from 'axios';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { Modal } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

const EditAccount = ({ id, handleShow, handleClose, show }) => {
  const [submitted, setSubmitted] = useState(false)
  const [successText, setSuccessText] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    // built-in feature that helps
    // retrieving the form values
    const formData = new FormData(e.target)
    const userData = Object.fromEntries(formData.entries()); // {firstName: Gilson}

    if (submitted) {
      axios.put(`https://rocketbank-api.onrender.com/accounts/${id}`, {
        firstName: userData.firstName,
        lastName: userData.lastName,
        emailName: userData.email,
        password: userData.password,
        balance: userData.balance,
        type: userData.type,
        isAdmin: userData.isAdmin
      })
      setSubmitted(false)
      setSuccessText(true)
      handleClose()
    }
  }

  return (
    <>

      <Modal
        show={show}
        onHide={handleClose}
        id={'modalStyle'}
      >
        <div className='bg-[#E0E0CE] pb-3'>
          <Modal.Header closeButton>
            <h1 className='w-full ml-2 p-2 font-bold text-4xl'>Edit Account</h1>
          </Modal.Header>
          <section className='flex flex-col justify-center items-center w-full'>

            {/* {successText &&
              <Alert variant="succces">
                submitted
              </Alert>
            } */}
            
            <Card classname='h-auto w-11/12 bg-[rgb(224,224,206)] p-4'>

              <form onSubmit={handleSubmit} className='flex flex-col w-full justify-center items-center'>
                <Input
                  label='First Name'
                  type='text'
                  id='firstName'
                  classname={'w-full'}
                />
                <Input
                  label='Last Name'
                  type='text'
                  id='lasttName'
                  classname={'w-full'}
                />

                <span className='text-left my-3 w-[95%] h-0.5 bg-[#AD343E]'></span>

                <Input
                  label='Email'
                  type='email'
                  id='email'
                  classname={'w-full'}
                />
                <Input
                  label='Password'
                  type='password'
                  id='password'
                  classname={'w-full'}
                />

                <span className='text-left my-3 w-[95%] h-0.5 bg-[#AD343E]'></span>

                <Input
                  label='Initial Balance'
                  type='number'
                  id='balance'
                  classname={'w-full'}
                  min='0'
                />
                <Input
                  label='Account type'
                  type='text'
                  id='type'
                  placeholder='Current or Saving...'
                  classname={'w-full italic'}
                />
                <Button
                  classname={'hover:bg-[#AD343E] w-1/2 p-3 font-bold uppercase mt-5'}
                  id={'buttonBg'}
                  onClick={() => {
                    setSubmitted(true);

                  }}
                >
                  Edit Account
                </Button>
              </form>
            </Card>
          </section>
        </div>
      </Modal>
    </>


  )
}

export default EditAccount