import { Box, Grid} from "@mui/material"
import React from "react";
import logo2 from '../assets/Logo-removebg-preview (1).png'


const Header = () =>{
    return(
        <Grid container spacing={1} justifyContent='center'>
            <Box sx={{ transition:'0.1s',
                '&:hover':{
                    transform:'scale(1.2)'
                }}}>
                <img src={logo2} alt='Logo'/>
            </Box>    
        </Grid>
    )
}
export default Header;
