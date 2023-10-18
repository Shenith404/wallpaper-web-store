import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from "../Images/logo.png"; // Replace with the actual image path
import { Avatar, Box, Button, Dialog, DialogContent, Link, Tooltip,DialogActions, TextField } from '@mui/material';
import styled from '@emotion/styled';
import cover from '../Images/cover.jpg'
import { CircleNotifications,Co2Sharp,ContactlessTwoTone,ElevationScroll, FlashOnRounded } from '@mui/icons-material';
import { useState,useEffect } from 'react';
import { FormControl,Select,MenuItem,Typography,  Input } from '@mui/material'
import coverImg from "../Images/userwindoimg.jpg"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';
import SearchResults from './SearchResults';

const categories = ['Games', 'Animals', 'Art', 'Cars', 'Nature','Other'];
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
    margin:" 10px 0 0 8px",
  
  
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
  


function Header() {
    const[currentUser,setCurrentUser]=useState(JSON.parse(sessionStorage.getItem("currentUser")) || null);
    useEffect(()=>{
        sessionStorage.setItem('currentUser',JSON.stringify(currentUser));},[currentUser]);
    
    const [isUserExist, setIsUSerExist] = useState(
        JSON.parse(sessionStorage.getItem('isUserExist')) || false
      );
    
      // This effect will run whenever `isUserExist` changes
      useEffect(() => {
        // Store `isUserExist` in SessionStorage
        sessionStorage.setItem('isUserExist', JSON.stringify(isUserExist));
      }, [isUserExist]);
    const[openUpload,setOpenUpload]=useState(false);
    const[openSingIn,setOpenSignIn]=useState(false);

    

    const [file, setFile] = useState(null);
  const [category, setCategory] = useState('');
  const [newImageName, setNewImageName] = useState('');
  const[userId,setUserId]=useState(1);

  


  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0])
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value)
  };

  const handleNewImageNameChange = (e) => {
    setNewImageName(e.target.value);
    console.log(e.target.value)
  };

    
    


  const handleUpload = async () => {
    if (!category || !file) {
      alert('Please fill in all fields.');
      return;
    }
    const newFileName = newImageName ; 
  // Create a new File object with the renamed file
    const renamedFile = new File([file], newFileName, { type: file.type });
    setUserId(currentUser.id);
   
    const formData = new FormData();
    formData.append('category', category);
    formData.append('userId', userId);
    formData.append('file', renamedFile);

    try {
      const response = await fetch('http://localhost:8080/wallpapers/add', {
        method: 'POST',
        body: formData,
      });

      if (response.status === 201) {
        alert('Image uploaded successfully.');
        setOpenUpload(false);window.location.reload();
        


      } else {
        alert('Image upload failed. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Image upload failed. Please try again.');
    }
  };

      
      const[email,setEmail]=useState("");
      const[password,setPasswd]=useState("");
      const handleSingIn  = async(e)=>{
        e.preventDefault();
        const User={password,email};
        console.log(User)
        try {
            const response = await axios.post('http://localhost:8080/Accounts/login',User);
            
            console.log(response.data)
            setCurrentUser(response.data);
            
            
            if (response.status === 202) {
              alert('Login Sucessful.');
              setOpenSignIn(false);
              setIsUSerExist(true);
              
            } else {
              alert(' Incorrect UserName or Passwrod Please try again.');
            }
          } catch (error) {
          
            alert('  Incorrect UserName or Passwrod Please try again.');
          }
    }


    // sing up
    const[openSignUp,setOpenSignUp]=useState(false);

    const[username,setUsername]=useState("");
    const[conPasswd,setConPasswd]=useState("");

    const handleSignUp =async(e)=>{
        e.preventDefault();
        if(conPasswd===password){
            const user ={
                username:username,
                password:password,
                email:email,
            }
            console.log(user)
            try{
                const response = await axios.post("http://localhost:8080/Accounts/users",user);
                if(response.status===201){ alert("You are successfully singUp. Welcome") ;setOpenSignUp(false); setIsUSerExist(true);setCurrentUser(response.data)}
                else{alert("invalide sign Up, please try agin ")}

            }catch(erorr){
                console.error("invlide ,please try agin",erorr);
            }
        }else{
            alert("password are not match , try again")
        }


    };
        //serch
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
        
          try {
            const response = await axios.get(`http://localhost:8080/wallpapers/search/${searchTerm}`);
            if (response.status === 200) {
              console.log(response.data);
              setOpenSearch(false);
             
              
            } else {
              console.error('Search request failed.');
            }
          } catch (error) {
            console.error('An error occurred:', error);
          }
        }
        

   
  return (
  
        
   
        <Box  sx={{
            position:"static",
            margin: "0",
            height: "320px",
            backgroundImage: `url(${cover})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: 'black',
            backgroundPosition: "top",
            width: "100%",
            opacity: "0.89",
            display: 'flex',                
            flexDirection: 'column',       
            alignItems: 'center', 
            
            
            
            }}>
                <AppBar  position='static'  sx={{top:"0",bottom:"auto",bgcolor:"rgb(255,255,255,0.01)"}}>
                    
                            <AppBar position={"fixed"}sx={{top:"0",bottom:"auto",bgcolor:"rgb(0,0,0,0.8)",zIndex:"200",}}>
                            <Toolbar   sx={{width:"100%",height:"44px",justifyContent:"space-between",bgcolor:"rgb(255,255,255,0.3)",top:"0"}}>
                            <Box  sx={{marginLeft:"20px"}}>
                            <Button   sx={{ color:"white" ,'&:hover': {backgroundColor: 'rgb(192,192,192,0.2)'},fontSize:"20"}} href='/'>Home</Button>
                            <Button onClick={()=>{isUserExist && setOpenUpload(true);
                                                if(isUserExist===false){setOpenSignUp(true);alert("sign Up Before the upload")}
                            }}  sx={{ color:"white" ,'&:hover': {backgroundColor: 'rgb(192,192,192,0.2)'},fontSize:"20"}}>Upload Wallpapers</Button>
                            </Box>
                            { !isUserExist && <Box  sx={{marginRight:"60px",display:"flex",justifyItems:'center',alignItems:"center"}}>
      
                            <Button   sx={{ color:"white" ,'&:hover': {backgroundColor: 'rgb(192,192,192,0.2)'},fontSize:"20"}} onClick={()=>{setOpenSignIn(true)}}>Sign in</Button>
                            <Button   sx={{ color:"red" ,'&:hover': {backgroundColor: 'rgb(192,192,192,0.2)'},fontSize:"20"}} onClick={()=>setOpenSignUp(true)}>Sign up</Button>
                            </Box> }
                            {isUserExist && <Box  sx={{marginRight:"65px",display:"flex",justifyItems:'center',alignItems:"center"}}>

                            <a href='/user'>

                              <Typography sx={{width:"40px",height:"40px",margin:"10px 0 0 0",fontWeight:"Bold",color:"white"}}>{currentUser.username}</Typography></a>
                            <Tooltip title="Log Out"><a onClick={()=>{alert("you are logged out");setIsUSerExist(false);}}><LogoutIcon sx={{width:"30px",height:"30px",}}></LogoutIcon></a></Tooltip>
                            </Box>}
            
                        </Toolbar>
                            </AppBar>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',       
                        justifyContent: 'center',   
                        bgcolor: 'transperent',
                        height:"320px",
                                  
                    }}
                    >
                    <a href='/'>
                    <img src={Logo}  width="250px" alt="Logo" />
                    </a>
                    <Typography  sx={{
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Elevate Your Décor Game with Stunning Wallpaper Selections</Typography>
                    </Box>
                </AppBar>

                {/* {Upload window} */}

        <Dialog open={openUpload} >
            <Box sx={{display:"flex",justifyContent:"center",width:"400px" ,height:"500px",borderRadius:"20px"}}>
            <Box>
                <Typography sx={{margin:"10px",textAlign:"center",fontWeight:"Bold"}}>Upload</Typography>

            <Box sx={{border: '1px dashed black',borderBlockColor:"black",width:"300px",height:"180px",borderRadius:"10px",margin:"0 0 20px 0",justifyContent:"center",display:"flex"}}>
          <Input sx={{width:"200px"}} type='file' onChange={handleImageChange}></Input>
             </Box>
            <Box sx={{display:"flex",justifyContent:"center"}}>
            <FormControl >
            <Typography sx={{width:"200px",textAlign:"center"}}>Select Category</Typography>
            <Select width={"500px"}
              labelId="category-label"
              value={category}
              onChange={handleCategoryChange}
              
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {categories.map((category, index) => (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              ))}
          </Select>
          <Typography sx={{width:"200px",textAlign:"center"}}>Name</Typography>

          <Input margin='10px' type='text' value={newImageName} onChange={handleNewImageNameChange}></Input>
          <Button variant={"outlined"} sx={{margin:"10px 0 0 10px",height:"33px",width:"180px",borderRadius:"10px"}} onClick={()=>{setOpenUpload(false);}} color="primary">
          Cancel
        </Button>
          <DownloadButton onClick={handleUpload}>Upload</DownloadButton>
        </FormControl>

            </Box>
            
      </Box>
    </Box>
     </Dialog>

     {/* Sing In menu */}
     <Dialog open={openSingIn} maxWidth={"md"}>
      <Box sx={{height:"600px",borderRadius:"10px",display:"flex"}}>
        <Box sx={{width:"500px",left:0,right:"auto",justifyContent:"center",display:"flex"}}>
          <Box>
          <Box sx={{display:"flex",justifyContent:"left",margin:0}}>
            <a onClick={()=>{setOpenSignIn(false)}}>
                <ArrowBackIcon sx={{width:"50px",margin:"0 0 0 -100px"}}></ArrowBackIcon></a>
            </Box>

          <Typography sx={{fontSize:"36px",fontWeight:"Bold",color:"Black",margin:"115px 0 10px 0 ",width:"300px", textAlign:"center"}}>Welcome back</Typography>
          <Typography sx={{fontWeight:"Bold",color:"gray", width:"300px", textAlign:"center"}}>Email</Typography>
          <Input sx={{width:"300px",margin:"10px"}} type='text' onChange={(e)=>setEmail(e.target.value)}></Input>
          <Typography sx={{fontWeight:"Bold",color:"gray", width:"300px", textAlign:"center"}} type="password">Password</Typography>
          <Input sx={{width:"300px",margin:"10px"}} type='text' onChange={(e)=>{setPasswd(e.target.value)}}></Input>
          <Box width={300} margin={"10px 0 10px 0 "} sx={{display:"flex",justifyContent:"center"}} onClick={handleSingIn}><SignBtn >Sign in</SignBtn></Box>

          <Box width={300} sx={{display:"flex",justifyContent:"center"}}><FbBtn sx={{color:"black"}}>Continue with Facebook</FbBtn></Box>

          </Box>
         

        </Box>


        <Box sx={{width:"350px",right:0,left:"auto",backgroundImage:`url(${coverImg})`,filter:"brightness(0.9)",backgroundRepeat:"no-repeat",display:"flex",justifyContent:"center",opacity:"0.8"}}>
          <Box justifyContent={"center"}>
            <Typography sx={{fontSize:"36px",fontWeight:"Bold",color:"white",margin:"75px 0 10px 0 ",width:"300px", textAlign:"center"}}>New Here?</Typography>
            <Typography sx={{fontWeight:"Bold",color:"white", width:"300px", textAlign:"center"}}>"Embark on Your Journey with Us
             Create Your Account Today!</Typography>
            <Box sx={{justifyContent:"center",display:"flex",top:"auto",bottom:0,height:"50px",margin:"250px 0 0 0 "}}> <FbBtn sx={{ width:"100px", height: "45px", borderRadius: "20px",borderColor:"white",color:"white" }}
            onClick={()=>{setOpenSignUp(true);setOpenSignIn(false);}}>
          create
        </FbBtn></Box>
          
            
          </Box>
        </Box>


      </Box>
    </Dialog>



    {/* Sing Up menu */}
    <Dialog open={openSignUp} maxWidth={"md"}>
      <Box sx={{height:"600px",borderRadius:"10px",display:"flex"}}>
        <Box sx={{width:"500px",left:0,right:"auto",justifyContent:"center",display:"flex"}}>
          <Box>
          <Box sx={{display:"flex",justifyContent:"left",margin:0}}>
            <a onClick={()=>{setOpenSignUp(false)}}>
                <ArrowBackIcon sx={{width:"50px",margin:"0 0 0 -100px"}}></ArrowBackIcon></a>
            </Box>

          <Typography sx={{fontSize:"36px",fontWeight:"Bold",color:"Black",margin:"75px 0 10px 0 ",width:"300px", textAlign:"center"}}>Welcome</Typography>
          <Typography sx={{fontWeight:"Bold",color:"gray", width:"300px", textAlign:"center"}}>Username</Typography>
          <Input sx={{width:"300px",margin:"10px"}} type='text' onChange={(e)=>setUsername(e.target.value)}></Input>
          <Typography sx={{fontWeight:"Bold",color:"gray", width:"300px", textAlign:"center"}}>Email</Typography>
          <Input sx={{width:"300px",margin:"10px"}} type='text' onChange={(e)=>{setEmail(e.target.value)}}></Input>
          <Typography sx={{fontWeight:"Bold",color:"gray", width:"300px", textAlign:"center"}}>Password</Typography>
          <Input sx={{width:"300px",margin:"10px"}} type='text' onChange={(e)=>setPasswd(e.target.value)}></Input>
          <Typography sx={{fontWeight:"Bold",color:"gray", width:"300px", textAlign:"center"}}>Conform Password</Typography>
          <Input sx={{width:"300px",margin:"10px"}} type='text' onChange={(e)=>{setConPasswd(e.target.value)}}></Input>
          <Box width={300} margin={"10px 0 10px 0 "} sx={{display:"flex",justifyContent:"center"}} ><SignBtn onClick={handleSignUp} >Sign in</SignBtn></Box>

          <Box width={300} sx={{display:"flex",justifyContent:"center"}}><FbBtn sx={{color:"black"}}>Continue with Facebook</FbBtn></Box>

          </Box>
         

        </Box>


        <Box sx={{width:"350px",right:0,left:"auto",backgroundImage:`url(${coverImg})`,filter:"brightness(0.9)",backgroundRepeat:"no-repeat",display:"flex",justifyContent:"center",opacity:"0.8"}}>
          <Box justifyContent={"center"}>
            <Typography sx={{fontSize:"36px",fontWeight:"Bold",color:"white",margin:"75px 0 10px 0 ",width:"300px", textAlign:"center"}}>Already have an
Account</Typography>
            <Typography sx={{fontWeight:"Bold",color:"white", width:"300px", textAlign:"center"}}>"Unlock a World of Possibilities
Sign in to Access Your
Personalized Journey!”</Typography>
            <Box sx={{justifyContent:"center",display:"flex",top:"auto",bottom:0,height:"50px",margin:"250px 0 0 0 "}}> <FbBtn sx={{ width:"100px", height: "45px", borderRadius: "20px",borderColor:"white",color:"white" }}
            onClick={()=>{setOpenSignUp(false);setOpenSignIn(true);}}>
          Sign in
        </FbBtn></Box>
          
            
          </Box>
        </Box>


      </Box>
    </Dialog>


    {/* searchbar */}
    
    
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
          
       
  
  
     
   
  )
}

export default Header