import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, Button } from '@mui/material';
import { Input,Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState,useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import ImageDisplay from './PrivacyPolicy/ImageDisplay';
import SearchIcon from '@mui/icons-material/Search';
import {  alpha } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';







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




export default function HomePage() {
  const[open,setOpen]=useState(false);
  const[selectItem,SetSelectItem]=useState("");
  const[itemData,setItemData]=useState([]);

  useEffect(() => {
    
    const loadItems = async () => {
      try {
        const result = await axios.get("http://localhost:8080/wallpapers/all-wallpapers");
      
        setItemData(result.data);
        console.log(result);
      } catch (error) {
       
        console.error("Error fetching data:", error);
      }
    };
    loadItems();
  }, []);



  useEffect(() => {
    const dialogState = JSON.parse(localStorage.getItem('dialogState'));
    if (dialogState !== null) {
      setOpen(dialogState.isOpen);
      SetSelectItem(dialogState.selectItem);
    }
  }, []);

  useEffect(() => {
    const dialogState = { isOpen: open, selectItem: selectItem };
    localStorage.setItem('dialogState', JSON.stringify(dialogState));
  }, [open, selectItem]);
 
  
  function downloadFile(data, filename) {
    const blob = new Blob([data], { type: 'image/jpeg' }); 

  const renamedFile = new File([blob], filename, { type: blob.type });
    
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }


  const[openSearch,setOpenSearch]=useState(false);
  const[searchTerm,setSearchTerm]=useState("")

  const handleSearchTerm =(e)=>
  {
    e.preventDefault()
    setSearchTerm(e.target.value);
    console.log (searchTerm);
  }
  const handleSearch = async (e) => {
    e.preventDefault();
    setShowSr(true)
  
    try {
      const response = await axios.get(`http://localhost:8080/wallpapers/search/${searchTerm}`);
      if (response.status === 200) {
        console.log(response.data);
        setOpenSearch(false);
        setItemData(response.data)
       
        
      } else {
        console.error('Search request failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }


  const[showSr,setShowSr]=useState(false)
  return (
   <Box>
      <a onClick={()=>setOpenSearch(true)}>
       <Box display={"flex"} sx={{justifyContent:"center",alignContent:"center",flexDirection:"row"}}
       >
          {/* <Box  display={"flex"} sx={{justifyContent:"center",alignContent:"center",flexDirection:"row",width:"100px",border:"1px"}}>
         <SearchIcon sx={{width:"30px", margin:"15px 0 0 0",fontWeight:"Bold",color:"black"}}></SearchIcon>
         <Typography sx={{width:"30px", margin:"12px 0 0  0",fontWeight:"Bold",color:"black"}}>Search</Typography>

       
         </Box>  */}
         <Box sx={{width:"200px",display:"flex",justifyContent:"left",height:"30px",borderRadius:"15px",bgcolor:"white",opacity:"0.5",marginTop:"-100px"}}>
         <Box  display={"flex"} sx={{justifyContent:"center",alignContent:"center",flexDirection:"row",width:"100px",border:"1px"}}>
         <SearchIcon sx={{width:"30px", margin:"4px 0 0 0",fontWeight:"Bold",color:"black"}}></SearchIcon>
         <Typography sx={{width:"30px", margin:"3px 0 0  0",fontWeight:"Bold",color:"black"}}>Search</Typography>

       
         </Box>
         </Box>
         
       </Box>
</a >
{ showSr &&        <Typography sx={{ margin:"12px 0 0  0",fontWeight:"Bold",color:"black"}}>Serching Result of  "{searchTerm}"</Typography>
}
     <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                             
      <ImageList sx={{ width: 1440, overflow: 'hidden', margin: '10px 0 0 30px' }} cols={5}>
        {itemData.map((item, index) => (
          <ImageListItem sx={{ width: '250px', zIndex: 0 }} key={item.img}>
            <a style={{
                position: 'relative',
                zIndex: 0}} onClick={()=>{setOpen(true);SetSelectItem(item);}}>
             <img
                  height="140px"
                  width="250px"
                  style={{ borderRadius: '10px' }}
                   src=  {`Imgs/${item.wallpaperName}`}
                  alt={item.wallpaperName}
                  loading="lazy"
                />
            </a>
            <ImageListItemBar
              title={item.wallpaperName}
              subtitle={<Box sx={{color:"gray",fontWeight:"Bold"}}> {item.category}</Box>}
              position="below"
            />
          
          </ImageListItem>


         
        ))}
      </ImageList>
      <Dialog open={open} onClose={setOpen} maxWidth={"xl"} sx={{borderRadius: '20px'}}> 
      
        <Box sx={{display:"flex"}}>
        <DialogTitle sx={{left:0,right:"auto",width:"300px"}}>{selectItem.wallpaperName}</DialogTitle>
        <DialogActions sx={{marginLeft:"375px"}}>
        
        <Button variant={"outlined"} sx={{height:"33px",width:"100px",borderRadius:"10px"}} onClick={()=>{setOpen(false);SetSelectItem("");}} color="primary">
          Cancel
        </Button>
      <DownloadButton margin={10} color="primary"
       onClick={() => downloadFile(selectItem.imageData, selectItem.wallpaperName+".jpg")}

      

>
   Download
 
 </DownloadButton>
        
      </DialogActions></Box>
        <DialogContent>
          
          <img src={`Imgs/${selectItem.wallpaperName}`} alt='Selected Image' width={"950px"} height={"520px"}  style={{ borderRadius: '10px',
                zIndex: 0 }}>
          </img>
        </DialogContent>
        
      </Dialog>




      <Dialog open={openSearch} onClose={setOpenSearch}>
      <Typography textAlign={"center"}>Search</Typography>
      <DialogContent>
      <Input type='text' onChange={(e)=>setSearchTerm(e.target.value)}></Input>

      </DialogContent>
      <DialogActions>
        <Button onClick={()=>setOpenSearch(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSearch} href='/Search' color="primary">
          Search
        </Button>
      </DialogActions>
    </Dialog>

      
     

    </Box>
   </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];