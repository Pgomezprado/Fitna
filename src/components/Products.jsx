import React from "react";
import {Container, Typography, Box,Button} from '@mui/material'
import MobileApp from '../assets/Daco_3968705.png'
import CalendarImg from '../assets/pngegg.png'

const Products = () =>{
    return(
        <Container>
            <Typography sx={{
                fontSize:'3rem',
                textAlign:'center',
                marginBottom:'2rem',
                color:'white',
                '@media (max-width:442px)':{
                    fontSize:'1.rem',
                }
            }}>
                Our Products
            </Typography>

            <Box sx={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'center',
                width:'100%',
                textAlign:'center',
                gap:'1rem',
                marginBottom:'2rem'
            }}>
                <Box sx={{
                    transition:'0.3s',
                    '&:hover':{
                        transform:'scale(1.05)'
                    }
                }}>
                    <img src={MobileApp} alt="Pic Personal" 
                    style={{
                        width:'15rem',
                        height:'auto',
                        borderRadius:'2rem'
                    }}
                    />
                    <Typography sx={{width:'15rem', color:'white'}}>Personalización sin límites</Typography>
                </Box>
                <Box sx={{
                    transition:'0.3s',
                    '&:hover':{
                        transform:'scale(1.05)'
                    }
                }}>
                    <img src={CalendarImg} alt="Pic Personal" 
                    style={{
                        width:'15rem',
                        height:'auto',
                        borderRadius:'2rem'
                    }}
                    />
                    <Typography sx={{width:'15rem', color:'white'}}> Seguimiento en tiempo real</Typography>
                </Box>
                <Box sx={{
                    transition:'0.3s',
                    '&:hover':{
                        transform:'scale(1.05)'
                    }
                }}>
                    <img src={MobileApp} alt="Pic Personal" 
                    style={{
                        width:'15rem',
                        height:'auto',
                        borderRadius:'2rem'
                    }}
                    />
                    <Typography sx={{width:'15rem', color:'white'}}> Variedad y versatilidad</Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Products;