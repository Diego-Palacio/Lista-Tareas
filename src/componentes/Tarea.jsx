import {Button} from "@mui/material";

export const Tarea = ({tarea,tareas,setTareas}) => {
   
    //bolleano que devuelve si la tarea ingresada es vacia
    let vacio= tarea !== "";

    const borrarTarea = (e) => {
        setTareas(tareas.filter(t => t !=tarea)  ) 
        e.preventDefault();
        e.stopPropagation();
    }

    const completarTarea= (e) =>{                             
       tarea.estado=true;
       setTareas([...tareas])
    }


    return (
            < >

            { vacio? 
            
                <>  
                    <p style={{width:"350px",overflowWrap:"break-word"}}>{tarea.tarea}</p>
                    <input type="button" style={{marginRight:4+"px"}} onClick={(e)=>completarTarea(e)} value="completar" size="large"/>
                    <Button onClick={(e)=>borrarTarea(e)} size="small" variant="outlined" color="error">Borrar</Button>
                </>
                   
              :"" }
                
            </>            
        );
}
