import { useState } from "react"
import { FormularioTarea } from "./componentes/formularioTarea"
import { Tarea } from "./componentes/tarea"

export const AppListaTareas = ( ) => {

    const [tareas, setTareas]=useState([]);

    console.log(tareas)

    return (<>

        <h1>Lista de Tareas:</h1>

        <FormularioTarea listaTareas={setTareas} />

        {
          tareas.map( (tareas,index)=> ( 
             <Tarea tarea={tareas} key={index} />
          )
        )}

        


    </>)

}