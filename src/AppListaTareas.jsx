import { useState } from "react"
import { FormularioTarea } from "./componentes/FormularioTarea"
import { Tarea } from "./componentes/Tarea"
import { Grid, ListItem } from "@mui/material";

export const AppListaTareas = ( ) => {

    const [tareas, setTareas]=useState([]);

    console.log(tareas)

    return (<>

        <h1 style={{textAlign:"center"}}>Lista de Tareas:</h1>

        <FormularioTarea listaTareas={setTareas} />


        <Grid justifyContent="center" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            
          {
            tareas.map( (t,index)=> ( 

                <Grid xs={4}  style={{border:1+"px solid grey",height:120+"px", borderRadius:12+"px",margin:4+"px"}}>
                  <ListItem>
                      <Tarea tareas={tareas}  setTareas={setTareas} tarea={t} key={index}  />
                  </ListItem>
                  </Grid>
            )
          )}

        </Grid>
        
     


        


    </>)

}