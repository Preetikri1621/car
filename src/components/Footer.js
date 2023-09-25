import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Car from "../images/Car Wash.png";
import InstagramIcon from "@mui/icons-material/Instagram";
 import TwitterIcon from "@mui/icons-material/Twitter";
 import FacebookIcon from  "@mui/icons-material/Facebook";
 import { Box } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';

  const Footer =()=> {
  return (
    <Box
    
      sx={{
         backgroundColor: '#FFF',
         Color:'black',
         width:'100%',
        }}>
      <Container maxWidth="xl"sx={{marginTop:'5%'}} >
        <Grid container spacing={2} >
          <Grid item xs={15} sm={3} marginTop='2%' >
          <img src={Car} alt="" style = {{width:"163px",height :"auto"}}/>
          
            <Typography variant="body2" color="black" sx={{marginTop:'25%'}}>
            <CopyrightIcon  />  2021 Car Wash.All Rights Reserved
            </Typography>
            
          </Grid>
          
          <Grid item xs={15} sm={2} marginTop='2%'>
            <Typography variant="body1" color="black" gutterBottom>
             <b> PAGE</b>
            </Typography>
            <Typography variant="body2" color="black" gutterBottom sx={{marginTop:'5%'}}>
              Privacy and Cookie Policy
            </Typography>
            <Typography variant="body2" color="black" gutterBottom>
              Search Terms
            </Typography>
            <Typography variant="body2" color="black" gutterBottom>
             Orders and Returns
            </Typography>
            <Typography variant="body2" color="black" gutterBottom>
             Advanced Search 
            </Typography>
            <Typography variant="body2" color="black" gutterBottom>
            Contact Us
            </Typography>
            
          </Grid>

          <Grid item xs={15} sm={2} marginTop='2%'>
            <Typography variant="body1" color="black" gutterBottom>
             <b> CAR</b>
            </Typography>
            <Typography variant="body2" color="black" gutterBottom sx={{marginTop:'5%'}}>
              Privacy and Cookie Policy
            </Typography>
            <Typography variant="body2" color="black" gutterBottom>
              Search Terms
            </Typography>
            <Typography variant="body2" color="black" gutterBottom>
             Orders and Returns
            </Typography>
            <Typography variant="body2" color="black" gutterBottom>
             Advanced Search 
            </Typography>
            <Typography variant="body2" color="black" gutterBottom>
            Contact Us
            </Typography>
            
          </Grid>
          
          <Grid item xs={15} sm={2} marginTop='2%' >
            <Typography variant="body1" color="black" gutterBottom>
              <b>SERVICES </b>
            </Typography>
            <Typography variant="body2" color="black" gutterBottom sx={{marginTop:'5%'}}>
              Privacy and Cookie Policy
            </Typography>
            <Typography variant="body2" color="black" gutterBottom>
              Search Terms
            </Typography>
            <Typography variant="body2" color="black" gutterBottom>
             Orders and Returns
            </Typography>
            <Typography variant="body2" color="black" gutterBottom>
             Advanced Search 
            </Typography>
            <Typography variant="body2" color="black" gutterBottom>
            Contact Us
            </Typography>
            
           </Grid>

           <Grid item xs={15} sm={3}  marginTop='2%' >
            <Typography variant="body2" color="grey" gutterBottom>
              (303) 985-0105,(303) 355-0105
            </Typography>
            <Typography variant="body2" color="black" gutterBottom sx={{marginTop:'5%'}}>
            mifs@info.com
            </Typography>
            <Typography variant="body2" color="grey" gutterBottom sx={{marginTop:'5%'}}>
            2972 Westheimer Rd.Santa Ana,<br/>lllinois 85486
            </Typography>
            <Typography variant="body2" color="black" gutterBottom sx={{marginTop:'5%'}}>
            <InstagramIcon />    <FacebookIcon  sx={{marginLeft:'15%'}}/>     <TwitterIcon  sx={{marginLeft:'15%'}}/>
            </Typography>
            </Grid>
             </Grid>
        
      </Container>

        
   </Box>
   
  );
 }

 export default Footer;
