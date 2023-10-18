import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import HomePage from './Components/HomePage';
import Header from './Components/Header';
import Privacy_policy from './Components/PrivacyPolicy/Privacy_policy';
import TermsAndServie from './Components/TermsAndService';
import PageNotFound from './Components/PageNotFound';
import UserView from './Components/UserView'
import SearchResults from './Components/SearchResults';
import ReturnAndRefund from './Components/ReturnAndRefund';

import Footer from './Components/Footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';



const DownloadButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  padding: '6px 12px',
  border: '0px solid',
  width :"180px",
  height:"36px",
  borderRadius:"10px",
  lineHeight: 1.5,
  backgroundColor: '#009B22',
  borderColor: '#009B22',
  fontWeight:"bold",
  color:"white",


  '&:hover': {
    backgroundColor: '#07B825',
    borderColor: '#009B22',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#009B22',
    
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

const FbBtn = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  padding: '6px 12px',
  border: '3px solid',
  width :"250px",
  height:"36px",
  borderRadius:"15px",
  lineHeight: 1.5,
  backgroundColor: 'transperent',
  borderColor: 'black',
  fontWeight:"bold",
  color:"black",


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


function App() {

  
  
  return (
    <Router >
      <Box sx={{overflowY:"scroll"}} >
      <Header />
        
        <Box margin={2}></Box>
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/Privacy-Policy" element={<Privacy_policy />} />
          <Route path="/Terms-And-Service" element={< TermsAndServie/>} />
          <Route path="/Return-And-Refund" element={<ReturnAndRefund />} />
          <Route path="/user" element={<UserView />} />
          <Route path="/Search" element={<SearchResults />} />
          <Route path="*" element={<PageNotFound />} />


        </Routes>
        <Box margin={15}></Box>
       
        <Footer />
        
      </Box>
    </Router>
  )
}

export default App