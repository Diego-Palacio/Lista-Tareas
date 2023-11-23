import { useEffect, useState } from "react"
import { FormularioTarea } from "./componentes/FormularioTarea"
import { ListaTareas } from "./componentes/ListaTareas";
    
const init = () =>{
    return JSON.parse(localStorage.getItem('listatareas'))|| [];
  }

export const AppListaTareas = ( ) => {

    const [tareas, setTareas]=useState(init);

    useEffect ( ()=>{
        localStorage.setItem('listatareas',JSON.stringify(tareas))
    },[tareas])

    return (<>

        <h1 style={{textAlign:"center"}}>Lista de Tareas:</h1>

        <FormularioTarea setTareas={setTareas} />

        <ListaTareas tareas={tareas} setTareas={setTareas} />
       
    </>)

}