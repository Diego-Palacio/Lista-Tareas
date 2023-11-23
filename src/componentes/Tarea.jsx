import { Box, Button, Card, CardActionArea, CardContent, Checkbox, Grid, IconButton, ListItem, Typography } from "@mui/material";
import { Fragment } from "react";


export const Tarea = ({tarea,index,tareas,setTareas}) => {
   
    //bolleano que devuelve si la tarea ingresada es vacia
    let vacio= tarea !== "";

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const borrarTarea = (e) => {
        console.log("tarea borrada")
        setTareas(tareas.filter(t => t !=tarea)  )                                                          
        e.preventDefault();
        e.stopPropagation();
    }

    return (
            < >

            { vacio? 
            
                <>  
                    <Checkbox color="success" size="large"/>
                    <p style={{width:"350px",overflowWrap:"break-word"}}>{tarea.tarea}</p>
                    <Button onClick={(e)=>borrarTarea(e)} variant="outlined" color="error">Borrar</Button>
                </>
                   
              :"" }
                
            </>            
        );
}
