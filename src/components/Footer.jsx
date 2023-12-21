import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () =>{
    return(
        <footer>
            <Box sx={{
                textAlign:'center',
                padding:'1rem',
                lineHeight:'3rem',
            }}>
                <Typography fontWeight={'bold'} fontSize={'1.5rem'} color='white' fontStyle='italic'>
                    FITNA
                </Typography>

                <Typography sx={{color:'white'}}>
                    &copy;{new Date().getFullYear()} Fitna. All right reserve
                </Typography>

                <Typography sx={{marginTop:'1rem'}}>

                        <a href="https://www.instagram.com" target="_blank" rel="nooperner noreferrer">
                        <InstagramIcon  marginRight='10px' sx={{ color:"white",'&:hover':{color:'green'}}} />
                        </a>

                        <a href="https://www.instagram.com" target="_blank" rel="nooperner noreferrer">
                        <FacebookIcon marginRight='10px' sx={{color:"white",'&:hover':{color:'green'}}} />
                        </a>
                    
                        <a href="https://www.instagram.com" target="_blank" rel="nooperner noreferrer">
                        <LinkedInIcon marginRight='10px'  sx={{color:"white",'&:hover':{color:'green'}}} />
                        </a>

                </Typography>

                <Typography  fontStyle={'italic'} marginTop={'3rem'} color={'white'}>
                    Powered by Your Company
                </Typography>
            </Box>
        </footer>
    )
}

export default Footer