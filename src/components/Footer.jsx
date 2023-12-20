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
                <Typography sx={{fontWeight:'bold',fontSize:'1.5rem',color:'white'}}>
                    FITNA
                </Typography>
                <Typography sx={{color:'white'}}>
                    &copy;{new Date().getFullYear()} Fitna. All right reserve
                </Typography>
                <Typography sx={{color:'white'}}>
                    123 Main Street, City, State, Country
                </Typography>
                <Typography sx={{color:'white'}}>
                    +56 1234 5678
                </Typography>
                <Typography sx={{color:'white'}}>
                    info@example.com
                </Typography>
                <Typography sx={{marginTop:'1rem'}}>
                        <a href="https://www.instagram.com" target="_blank" rel="nooperner noreferrer">
                        <InstagramIcon sx={{
                            marginRight:'10px',
                            color:'white',
                            '&:hover':{
                                color:'green'
                            }
                        }} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="nooperner noreferrer">
                        <FacebookIcon sx={{
                            marginRight:'10px',
                            color:'white',
                            '&:hover':{
                                color:'green'
                            }
                        }} />
                        </a>
                    

                        <a href="https://www.instagram.com" target="_blank" rel="nooperner noreferrer">
                        <LinkedInIcon sx={{
                            marginRight:'10px',
                            color:'white',
                            '&:hover':{
                                color:'green'
                            }
                        }} />
                        </a>
                    
                </Typography>
                <Typography sx={{fontStyle:'italic', marginTop:'3rem'}}>
                    Powered by Your Company
                </Typography>
            </Box>
        </footer>
    )
}

export default Footer