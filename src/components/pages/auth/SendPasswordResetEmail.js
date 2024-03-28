import React, { useState } from 'react'
import { Grid, TextField, Button, Box, Alert } from "@mui/material";

const SendPasswordResetEmail = () => {

    const[error, setError] = useState({
        status:false,
        msg: "",
        type: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
        }
        if(actualData.email) {
            console.log(actualData)
            document.getElementById('password-reset-email-form').reset()
            setError({status:true, msg: "Password reset email has been send to your registered email id, Kindly check!", type: 'success'})
            //navigate('/')
        }
        else {
            setError({status:true, msg: "Please enter your correct email id and try again!", type: 'error'})
        }
    }


  return (
    <>
        <Grid container justifyContent='center'>
            <Grid item sm={6} xs={12}>
                <Box component='form' noValidate sx={{mt: 1}} id='password-reset-email-form' onSubmit={handleSubmit}>
                    <h1 align='center'>Reset your password</h1>
                    <TextField required margin='normal' fullWidth id='email' name='email' label='Email' placeholder='Enter your registered email to reset password'/>
                    <Box textAlign='center'>
                        <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Send</Button>
                    </Box>
                    {error.status ? <Alert  severity={error.type} sx={{mt: 3}}>{error.msg}</Alert> : ''}
                </Box>
            </Grid>
        </Grid>
    </>
  )
}

export default SendPasswordResetEmail