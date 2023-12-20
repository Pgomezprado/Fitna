import React from "react";
import {Container, Typography, Box,Button} from '@mui/material'
import MobileApp from '../assets/Daco_3968705.png'

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
                    <Typography sx={{width:'15rem', color:'white'}}> First Product</Typography>
                    <Button>
                        Get!
                    </Button>
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
                    <Typography sx={{width:'15rem', color:'white'}}> Second Product</Typography>
                    <Button>
                        Get!
                    </Button>
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
                    <Typography sx={{width:'15rem', color:'white'}}> Next Product</Typography>
                    <Button>
                        Get!
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Products;