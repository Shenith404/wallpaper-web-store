import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from "../Images/logo.png"; // Replace with the actual image path
import { Box, Link } from '@mui/material';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

const LinkText =styled(Link)({
    color:"inherit",
    margin:10,
    
    '&:active':{color:"gray"}

})



function Footer() {
  return (
    <AppBar   position='static' sx={{top:"auto",bottom:0,left:0,right:0}}>
      <Toolbar  sx={{margin:"0", bgcolor: "#090808",justifyContent:"space-between", height: "100px", width: "100%",opacity:"0.89" }}>
        <Box margin={"20px"} >
        <a href='/'>
        <img   src={Logo}  width={"190px"} alt="Logo" />
        </a>
        </Box>
        <Box margin={"60px"}  sx={{textAlign:"Right"}}>
        <LinkText  href="/Terms-And-Service">Terms and Service
        </LinkText>
        <LinkText  href="/Privacy-Policy">Privacy Policy
        </LinkText><LinkText  href="/Return-And-Refund">Return and Refund Policy
        </LinkText>
        
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
