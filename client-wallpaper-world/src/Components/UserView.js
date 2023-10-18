import React from 'react'
import { Box, Dialog, Typography,Button, Input } from '@mui/material'
import styled from '@emotion/styled';


const FbBtn = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  padding: '6px 12px',
  border: '3px solid',
 
  height:"36px",
  borderRadius:"15px",
  lineHeight: 1.5,
  backgroundColor: 'transperent',
 
  fontWeight:"bold",



  '&:hover': {
    backgroundColor: 'rgb(192,192,192,0.2)' ,
    
    
    borderColor: '#1B1B1C',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'transperent',
    
  },

});
const SignBtn = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  padding: '6px 12px',
  border: '0px solid',
  width :"250px",
  height:"36px",
  borderRadius:"15px",
  lineHeight: 1.5,
  backgroundColor: 'black',
  borderColor: 'black',
  fontWeight:"bold",
  color:"white",


  '&:hover': {
    backgroundColor: 'rgb(28,28,27,0.92)',
    
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#1B1B1C',
    
  },

});



export default function UserView() {


  return (
    <Box></Box>

  
  )
}
