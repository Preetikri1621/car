import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import Car from "../images/Car Wash.png";
import Profile from "../images/profile user person account.png";
import Cart from "../images/shopping cart 2.png";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:'#FFF',color:'black',width:'100%'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
             sx={{ mr: 15}}

          >
            
            <img src={Car} alt="" style={{marginLeft:'10%'}}/>
          </IconButton>
         
          <Button color="inherit" ><b>HOME</b></Button>
          <Button color="inherit"  style={{color:'red'}}><b>BOOKING </b></Button>
          <Button color="inherit" ><b>ABOUT US</b></Button>
          <Button color="inherit"><b>CONTACT</b></Button>
          <Button color="inherit" ><b>CAR RENTAL</b></Button>
          <Button color="inherit" style={{marginLeft:'30%'}}><b>SIGN IN</b></Button>
          <img src={Profile} alt="" style={{marginLeft:'1%'}}/>
          <img src={Cart} alt=""style={{marginLeft:'1%'}} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

    

