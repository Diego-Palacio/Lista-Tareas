import { Grid, ListItem } from "@mui/material"
import { Tarea } from "./Tarea"

export const ListaTareas = ({tareas,setTareas}) => {
  return (
        <Grid justifyContent="center" container>
                
        {tareas.map( (t,index)=> ( 
        
            <Grid key={index} style={{backgroundColor:t.estado===true ? "#D4EFDF" : "white",  border:1+"px solid grey",height:50+"%", borderRadius:12+"px",margin:4+"px"}}>
                <ListItem>
                    <Tarea tareas={tareas} setTareas={setTareas} tarea={t} key={index}  />
                </ListItem>
            </Grid>
             )
        )}
        
        </Grid>
  )
}
