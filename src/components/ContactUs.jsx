import React from "react";
import { Container, TextField, Typography ,Box} from "@mui/material";
import {Button} from '@mui/material'

const ContactForm = ()=>{
    return(
        <Container sx={{
            display:'flex',
            flexDirection:'Column',
            alignItems:'center',
            justifyContent:'center',
            minHeight:'100vh',
            width:'100%'
        }}>
            <Typography sx={{
                fontSize:'3rem',
                textAlign:'center',
                marginBottom:'2rem',
                color:'white',
                '@media (max-width:442px)':{
                    fontSize:'1.5rem',
                }
            }}>
                Contact Us
            </Typography>
            <Box component='form' sx={{
                display:'flex',
                flexDirection:'column',
                marginTop:'2rem',
                maxWidth:'30rem'
            }}>
                <TextField
                label='Name'
                name='Name'
                fullWidth
                required
                sx={{
                marginBottom:'1rem' 
                }} inputProps={{style: {color:'white'}}}
                InputLabelProps={{style:{color:'white'}}} />
            </Box>
            <Box component='form' sx={{
                display:'flex',
                flexDirection:'column',
                marginTop:'2rem',
                maxWidth:'30rem'
            }}>
                <TextField
                label='Email'
                name='Email'
                fullWidth
                required
                sx={{
                marginBottom:'1rem' 
                }} inputProps={{style: {color:'white'}}}
                InputLabelProps={{style:{color:'white'}}} />
            </Box>
            <Box component='form' sx={{
                display:'flex',
                flexDirection:'column',
                marginTop:'2rem',
                maxWidth:'30rem'
            }}>
                <TextField
                label='Write a message'
                name='message'
                fullWidth
                required
                rows={4}
                sx={{
                marginBottom:'1rem' 
                }} inputProps={{style: {color:'white'}}}
                InputLabelProps={{style:{color:'white'}}} />
                <Button>
                    Submit
                </Button>
            </Box>

        </Container>
    )
}

export default ContactForm;