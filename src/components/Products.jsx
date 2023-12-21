import React from "react";
import {Container, Typography, Box,Button} from '@mui/material'
import PlannerPic from '../assets/planner.png'
import CashPic from '../assets/Cash.png'

const Products = () =>{
    return(
        <Container>
            <Typography fontStyle={'italic'} fontSize={'3rem'} textAlign={'center'} marginTop='2rem' fontWeight='bold'sx={{
                color:'white',
                '@media (max-width:442px)':{
                    fontSize:'1.rem',
                }
            }}>
            Servicios
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
                    <img src={PlannerPic} alt="Pic Personal" 
                    style={{
                        width:'15rem',
                        height:'auto',
                        borderRadius:'2rem'
                    }}
                    />
                    <Typography sx={{width:'15rem', color:'white'}}>Planificación de entrenamiento</Typography>
                </Box>
                <Box sx={{
                    transition:'0.3s',
                    '&:hover':{
                        transform:'scale(1.05)'
                    }
                }}>
                    <img src={CashPic} alt="Pic Personal" 
                    style={{
                        width:'15rem',
                        height:'auto',
                        borderRadius:'2rem'
                    }}
                    />
                    <Typography sx={{width:'15rem', color:'white'}}>Modulo de cobros</Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Products;