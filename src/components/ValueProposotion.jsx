import React from "react";
import { Box, Typography } from "@mui/material";

const ValueProposotion = () =>{
    return(
        <Box sx={{textAlign:'center'}}>
            <Typography sx={{
                fontSize:'3rem',
                fontWeight:'bold',
                fontStyle:'italic',
                color:'#FFFFFF',
                '@media (max-width):442px':{
                    fontSize:'2rem'
                }
            }}>
                ¿Que es Fitna?
            </Typography>

            <Box sx={{
                backgroundColor:'#0D0D0D',
                padding:'2rem',
                borderRadius:'10px',
                boxShadow:'0px 0px 35px 12px rgba(0,0,0,0.7)'
            }}>
                <Typography variant="h5" fontWeight='bold' marginTop={'1rem'} marginBottom={'1rem'} color={'white'}>
                    Personalización sin límites
                </Typography>

                <Typography fontSize={'1.1rem'} color='white' textAlign={'justify'}>
                Con Fitna, los profesores pueden crear planes de entrenamiento totalmente personalizados, teniendo en cuenta las metas individuales, niveles de habilidad y preferencias de cada alumno. Nuestra interfaz intuitiva permite ajustar cada rutina para maximizar el rendimiento y la satisfacción de los estudiantes.
                </Typography>

                <Typography variant="h5" fontWeight='bold' marginTop={'1rem'} marginBottom={'1rem'} color={'white'}>
                    Seguimiento en tiempo real
                </Typography>

                <Typography fontSize={'1.1rem'} color='white' textAlign={'justify'}>
                Ofrecemos una visión en tiempo real del progreso de cada alumno. Los profesores pueden monitorear el desempeño, el cumplimiento de metas y ajustar planes de entrenamiento sobre la marcha. Esto no solo mejora la eficacia de la enseñanza, sino que también fomenta una conexión más fuerte entre profesor y alumno.
                </Typography>

                <Typography variant="h5" fontWeight='bold' marginTop={'1rem'} marginBottom={'1rem'} color={'white'}>
                    Variedad y Versatilidad
                </Typography>

                <Typography fontSize={'1.1rem'} color='white' textAlign={'justify'}>
                Con una amplia biblioteca de ejercicios, técnicas y planes de entrenamiento, Fitna permite a los profesores diversificar las rutinas de sus alumnos. Adaptarse a las preferencias y necesidades específicas garantiza una experiencia de aprendizaje más atractiva y motivadora.
                </Typography>
                
            </Box>

        </Box>
    )
};


export default ValueProposotion;