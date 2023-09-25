import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Paper from '@mui/material/Paper';
import Rating from  "@mui/material/Rating";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from  "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "../images/Ng3xrviPrhkbgimg.png";



const About = () => {
  return (
    <>
      <Box
      sx={{
        width: '100%',
        height:'900px'
        
       
        }}>
        <img src={Image} alt="" style={{width:'100%', opacity: [ 0.2]}}/>
        </Box> 
    <Box sx={{}}> 
       <Grid container sx={{marginTop:'-50%'}}>
        <Grid xs={12} sm={6} md={6}>
         <Typography sx={{fontSize:"60px", color:"black",marginLeft:'10%'}}>
            <b> Car Washing <br/>
           Online Booking </b>
            <Typography sx={{color:"# F73718",fontSize:'60px'}}>
              <b>SERVICE</b>
            </Typography>
            <Typography sx={{marginTop:"2%", }}>
            <Button variant="contained" sx={{backgroundColor:"#F73718",fontSize:'30px'}} > START BOOKING </Button>
            </Typography>
         </Typography>
        </Grid>

        <Grid xs={12} sm={6} md={6} sx={{textAlign:"right",marginTop:'7%'}}>
         <TwitterIcon /> <br/>
         <FacebookIcon />  <br/>
         <InstagramIcon />  <br/>
         <LinkedInIcon />
        </Grid>
     </Grid>
     
      </Box>
      
      
    
    
     <Box sx={{width:'70%',marginInline:'15%',marginTop:'20%'}}>
     <Grid container  sx={{ width:'100%'}} >
    <Grid xs={12} sm={4} md={3}>
     <Paper sx={{
      width:'250px',
      height:'300px',
      bgcolor:"#D3D3D3",
      borderRadius:'22px'
     }}>
      <Typography sx={{textAlign:"center" }}>
        < AcUnitIcon style={{width:'120px',height:'120px'}}/> <br/>
        <Typography sx={{color:"red"}}>
       <b> Contactless Washing </b>
       <Typography sx={{color:"black"}}>
       <p> Vestibulum tortor risus, rutrum at congue sed ultricies finibus. </p>
       </Typography>
       </Typography>
       <Rating name="size-small" defaultValue={4} size="small" />
      </Typography>
      
     </Paper>
     </Grid>

     <Grid item xs={12} sm={6} md={3}>
     <Paper sx={{
     width:'250px',
     height:'300px',
     bgcolor:"#D3D3D3",
    borderRadius:'22px'
     }}>
      <Typography sx={{textAlign:"center"}}>
        < AcUnitIcon style={{width:'120px',height:'120px'}}/> <br/>
        <Typography sx={{color:"red"}}>
       <b> Safety Materials </b>
       <Typography sx={{color:"black"}}>
       <p>Cras aliquam tristique metus, eu gravida diam vestibulum gravida. </p>
       </Typography>
       </Typography>
       <Rating name="size-small" defaultValue={4} size="small" />
      </Typography>
     </Paper>
     </Grid>

     <Grid item xs={12} sm={4} md={3}>
     <Paper sx={{
      width:'250px',
      height:'300px',
      bgcolor:"#D3D3D3",
      borderRadius:'22px',
      
     }}>
      <Typography sx={{textAlign:"center"}}>
        < AcUnitIcon style={{width:'120px',height:'120px'}}/> <br/>
        <Typography sx={{color:"red"}}>
       <b> Modern Equipment </b>
       <Typography sx={{color:"black"}}>
       <p> Fusce maximus molestie nisl, ut dapibus libero vestibulum aliquam. </p>
       </Typography>
       </Typography>
       <Rating name="size-small" defaultValue={4} size="small" />
      </Typography>
     </Paper>
     </Grid>
     


     <Grid item xs={12} sm={4} md={3}>
     <Paper sx={{
     width:'250px',
     height:'300px',
     bgcolor:"#D3D3D3",
      borderRadius:'22px'
     }}>
      <Typography sx={{textAlign:"center"}}>
        < AcUnitIcon style={{width:'120px',height:'120px'}}/> <br/>
        <Typography sx={{color:"red"}}>
       <b> Extensive Cleaning </b>
       <Typography sx={{color:"black"}}>
       <p> Sestibulum non dolor sit amet mi moles tincidunt vel non velit. </p>
       </Typography>
       </Typography>
       <Rating name="size-small" defaultValue={4} size="small" />
      </Typography>
     </Paper>
     </Grid>

     </Grid> 
     </Box>
     <Grid container spacing={4} sx={{marginTop:"2%",width:'90%',marginLeft:'10%'}} >
    <Grid item xs={12} sm={4} md={3}>
      STEP 1
    </Grid>

    <Grid item xs={12} sm={6} md={3}>
       STEP 2 
    </Grid>

    <Grid item xs={12} sm={6} md={3}>
      STEP 3 
     
     </Grid>

    <Grid item xs={12} sm={6} md={3}>
      
       <Typography sx={{color:'#F73718'}}>STEP 4</Typography>
    </Grid>
   </Grid> 
     
     
   
    <Grid container spacing={4} sx={{marginTop:"2%",width:'90%',marginLeft:'5%'}} >
    <Grid item xs={12} sm={4} md={3}>
      <b> Sedan </b>
    </Grid>

    <Grid item xs={12} sm={6} md={3}>
      <b> INR99 / Month</b>
    </Grid>

    <Grid item xs={12} sm={6} md={3}>
     <b> Additional Services</b>
     
     </Grid>

    <Grid item xs={12} sm={6} md={3}>
      
       <Button variant='contained' sx={{bgcolor:"#F73718"}}>  Date and Time </Button>
    </Grid>
   </Grid> 
    </>
  )
}

export default About