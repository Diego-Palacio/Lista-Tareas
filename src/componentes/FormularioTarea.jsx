
export const FormularioTarea = ({setTareas}) => {

    const agregarTarea = (e) =>{
        let textoTarea=e.target.texto.value;
        textoTarea !== "" ?  setTareas(tareas => ([...tareas,  
           { tarea: textoTarea,
              estado:false
            }
         ])) : ""
        e.preventDefault();
        e.stopPropagation();     
    }

  return (
        <form  style={{justifyContent:"center",display:"flex", margin:8+"px"}} onSubmit={(e)=>agregarTarea(e)}>
            <input type="text" name="texto" style={{fontFamily: 'Commissioner',width:250+"px", marginRight:10+"px",marginBottom:10+"px"}}/>
            <button type="submit"> Agregar tarea </button>
        </form>

        
  )
}
