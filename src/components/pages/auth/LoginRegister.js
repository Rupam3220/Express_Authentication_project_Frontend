import { Box, Grid, Tab, Tabs, Card } from "@mui/material";
//import pic1 from "../../../images/pic1.png";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const TabPanel = (props) => {
    const {children, value, index} = props;
    return (
        <div role="tabpanel" hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}


const LoginRegister = () => {

    const[value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
    <>
      <Grid container sx={{height: '90vh'}} justifyContent='center'>
        {/* <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${pic1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: {xs: 'none', sm: 'block'}
          }}>
        </Grid> */}
        <Grid item lg={5} sm={7} xs={12}>
            {/* <Card sx={{width: '100%', height: '100%'}}> */}
                <Box>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={value} textColor='primary' indicatorColor="primary" onChange={handleChange}>
                            <Tab label='Login' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                            <Tab label='Register' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}><Login/></TabPanel>
                    <TabPanel value={value} index={1}><Register/></TabPanel>
                    {/* <TabPanel value={value} index={2}>OTP Login</TabPanel> */}
                </Box>
            {/* </Card> */}
        </Grid>
      </Grid>
    </>
  );
};

export default LoginRegister;
