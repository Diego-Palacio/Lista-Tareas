import { Grid, ListItem } from "@mui/material"
import { Tarea } from "./Tarea"

export const ListaTareas = ({tareas,setTareas}) => {
  return (
        <Grid justifyContent="center" container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
                
        {tareas.map( (t,index)=> ( 
        
            <Grid key={index} style={{border:1+"px solid grey",height:120+"px", borderRadius:12+"px",margin:4+"px"}}>
                <ListItem>
                    <Tarea tareas={tareas}  setTareas={setTareas} tarea={t} key={index}  />
                </ListItem>
            </Grid>
             )
        )}
        
        </Grid>
  )
}
