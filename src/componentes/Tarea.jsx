import { Box, Button, Card, CardActionArea, CardContent, Checkbox, Grid, IconButton, ListItem, Typography } from "@mui/material";
import { Fragment } from "react";


export const Tarea = ({tarea,index}) => {
   
    //bolleano que devuelve si la tarea ingresada es vacia
    let vacio= tarea !== "";

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
            <>

            { vacio? 
            
                <Card sx={{ maxWidth: 545, mt:2}}>
                    <CardActionArea> 
                        <CardContent>
                        
                        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                            <Box gridColumn="span 8">
                                <ListItem style={{padding:0,margin:20,fontSize:'18px',fontFamily: 'Commissioner'}}> {tarea} </ListItem>
                            </Box>
                            <Box gridColumn="span 4">
                                <ListItem>
                                            <Checkbox {...label} color="success" size="large"/>
                                            <Button variant="outlined" color="error">Borrar</Button>
                                </ListItem>
                            </Box>
                        </Box>

                            

                            

                           


                        </CardContent>
                    </CardActionArea>
                </Card> 
              :"" }
                
            </>            
        );
}
