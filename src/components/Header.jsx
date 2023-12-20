import { Box, Grid} from "@mui/material"
import React from "react";
import logo2 from '../assets/Logo-removebg-preview (1).png'


const Header = () =>{
    return(
        <Grid container spacing={1} justifyContent='center'>
                <img src={logo2} alt='Logo'/>
        </Grid>
    )
}
export default Header;
