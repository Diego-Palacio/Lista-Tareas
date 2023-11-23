import { useState } from "react"
import { FormularioTarea } from "./componentes/FormularioTarea"
import { Tarea } from "./componentes/Tarea"
import { Grid, ListItem } from "@mui/material";
import { ListaTareas } from "./componentes/ListaTareas";

export const AppListaTareas = ( ) => {

    const [tareas, setTareas]=useState([]);

    console.log(tareas)

    return (<>

        <h1 style={{textAlign:"center"}}>Lista de Tareas:</h1>

        <FormularioTarea setTareas={setTareas} />

        <ListaTareas tareas={tareas} setTareas={setTareas} />
       
    </>)

}