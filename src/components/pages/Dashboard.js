import { Button, CssBaseline, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ChangePassword from './auth/ChangePassword'


const Dashboard = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        console.log("Logged out")
        navigate('/loginreg')
    }

  return (
    <>
        <CssBaseline/>
        <Grid>
            <Grid item sm={2} sx={{backgroundColor:'gray', p:5, color:'white'}}>
                <Typography variant='h5'>Email: rupam@rupam.com</Typography>
                <Typography variant='h5'>Name: Rupam Chakraborty</Typography>
                <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{mt: 8}}>Logout</Button>
            </Grid>
            <Grid item sm={8}>
                <ChangePassword/>
            </Grid>
        </Grid>
    </>
  )
}

export default Dashboard