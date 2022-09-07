import React from 'react'
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    nameNeeded: false,
    messageNeeded: false,
    invalidEmail: false
  })

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value })
  }

  const handleNameBlur = () => {
    if (formState.name === '') {
      setFormState({ ...formState, nameNeeded: true, messageNeeded: false, invalidEmail: false })
    }
  }
  const handleMessageBlur = () => {
    if (formState.message === '') {
      setFormState({ ...formState, messageNeeded: true, nameNeeded: false, invalidEmail: false })
    }
  }

  const validateEmail = (mail) => {
    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(mail)) {
      return (true)
    } else {
      return (false)
    }
    
    
  }

  const handleEmailBlur = () => {
    if (validateEmail(formState.email) === true) {
      console.log("its valid")
    } else {
      setFormState({ ...formState, invalidEmail: true, nameNeeded: false, messageNeeded: false })
    }
  }



  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <h1>Contact</h1>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12} md={8} lg={7}>
          <FormControl fullWidth>
            <InputLabel htmlFor="my-input">name</InputLabel>
            <Input id="my-unput" aria-describedby='my-helper-text' name='name' onChange={handleInputChange} onBlur={handleNameBlur} />
            <FormHelperText id="my-helper-text"></FormHelperText>
          </FormControl>

        </Grid>
        <Grid item xs={12} md={8} lg={7}>
          <FormControl fullWidth>
            <InputLabel htmlFor="my-input">Email Address</InputLabel>
            <Input id="my-unput" aria-describedby='my-helper-text' name='email' onChange={handleInputChange} onBlur={handleEmailBlur} />
            <FormHelperText id="my-helper-text"></FormHelperText>
          </FormControl>

        </Grid>
        <Grid item xs={12} md={8} lg={7}>
          <TextField
            name='message'
            label="Message"
            rows={4}
            onChange={handleInputChange}
            onBlur={handleMessageBlur}
            fullWidth />



        </Grid>
      </Grid>
      <Grid container justifyContent='center'>
        <Grid item>
          <Button>Submit</Button>
        </Grid>

      </Grid>
      <Grid container justifyContent="center">
        {
          formState.nameNeeded ? <p> Name is required </p> : ''
        }
        {
          formState.messageNeeded ? <p> Message is required </p> : ''
        }
        {
          formState.invalidEmail ? <p> Valid email is required </p> : ''
        }
      </Grid>


    </>
  )
}

export default Contact