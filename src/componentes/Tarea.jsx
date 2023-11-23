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

    const completarTarea= (e) =>{
        console.log("tarea completa"+e.target.value)
        console.log(tareas)
        //buscamos la tarea seleccionada como completa
        setTareas(tareas.filter(t => t !=tarea)  )      
        //modificamos sus datos y de esta forma la completa se ubica al final de las listas de tareas                                         
        setTareas(tareas => ([...tareas,  
            { tarea: tarea.tarea,
               id:1,
               estado:true
             }
          ]))

    }

    

    return (
            < >

            { vacio? 
            
                <>  
                    <p style={{width:"350px",overflowWrap:"break-word"}}>{tarea.tarea}</p>
                    <input type="button" style={{display: tarea.estado===true ? "none" :"hidden",marginRight:4+"px"}} onClick={(e)=>completarTarea(e)} value="completar" size="large"/>
                    <Button onClick={(e)=>borrarTarea(e)} size="small" variant="outlined" color="error">Borrar</Button>
                </>
                   
              :"" }
                
            </>            
        );
}
