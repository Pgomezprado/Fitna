import { Typography } from "@mui/material";
import { Box} from "@mui/material"
import React from "react";
import logo from '../assets/logo-removebg-preview.png'


const Header = () =>{
    return(
        <Box sx={{
            marginTop:'6rem',
            padding:'1rem',
            maxWidth:'100%',
            overflow:'hidden'
        }}>
            <Typography align="center" sx={{
                fontFamily:'Montserrat',
                fontSize:'3rem',
                textAlign:'center',
                '@media (max-with):442px':{
                    fontSize:'1.5rem'
                }
            }}>
                FITNA
            </Typography>
            <Typography sx={{
                marginTop:'1rem',
                fontFamily:'Montserrat',
                fontSize:'1.5rem',
                textAlign:'center',
                '@media(max-with):442px':{
                    fontSize:'1.5rem'
                }
            }}>
                Tu plan, Tu Éxito!
            </Typography>

            <Box sx={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'center',
                alignItems:'center',
                alignText:'center'
            }}>
                <Box sx={{textAlign:'center'}}>
                    <img src={logo} alt='Logo'
                        style={{
                            maxWidth:'100%',
                            height:'auto',
                            marginTop:'1rem'
                        }}
                    />
                </Box>
            </Box>
        </Box>

    )
}

export default Header;


