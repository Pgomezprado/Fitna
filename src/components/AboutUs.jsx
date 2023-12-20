import React from "react";
import { Box, Typography } from "@mui/material";


const AboutUs = () =>{
    return(
        <Box>
            <Typography sx={{
                fontSize:'3rem',
                textAlign:'center',
                marginBottom:'2rem',
                color:'white',
                '@media (max-width:442px)':{
                    fontSize:'1.5rem',
                }
            }}>
                About Us
            </Typography>
            <Box sx={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'center',
                width:'100%',
                textAlign:'center',
                gap:'1rem',
                marginBottom:'2rem',
                backgroundColor:'black',
                paddingTop:'2rem',
                paddingBottom:'2rem',
                color:'white',
            }}>
                <Box sx={{
                    width:'15rem',
                    borderRadius:'10px',
                    padding:'1.5rem'
                }}>
                    <Typography sx={{
                        fontWeight:'bold',
                        marginBottom:'1rem'
                    }}>
                        Section 1 Title
                    </Typography>
                    <Typography>
                        I make the best products.I make the best products.I make the best products.I make the best products.I make the best products.I make the best products.
                    </Typography>
                </Box>
                <Box sx={{
                    width:'15rem',
                    borderRadius:'10px',
                    padding:'1.5rem',
                    color:'white'
                }}>
                    <Typography sx={{
                        fontWeight:'bold',
                        marginBottom:'1rem',
                        color:'white'
                    }}>
                        Section 1 Title
                    </Typography>
                    <Typography>
                        I make the best products.I make the best products.I make the best products.I make the best products.I make the best products.I make the best products.
                    </Typography>
                </Box>
                <Box sx={{
                    width:'15rem',
                    borderRadius:'10px',
                    padding:'1.5rem'
                }}>
                    <Typography sx={{
                        fontWeight:'bold',
                        marginBottom:'1rem'
                    }}>
                        Section 1 Title
                    </Typography>
                    <Typography>
                        I make the best products.I make the best products.I make the best products.I make the best products.I make the best products.I make the best products.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutUs;