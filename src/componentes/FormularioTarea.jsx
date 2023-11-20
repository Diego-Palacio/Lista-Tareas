
export const FormularioTarea = ({listaTareas}) => {

    const agregarTarea = (e) =>{
        console.log("Tarea agregada")
        let textoTarea=e.target.texto.value;
        listaTareas(tareas => ([...tareas, textoTarea]))
        e.preventDefault();
        e.stopPropagation();
        
    }

  return (
        <form onSubmit={(e)=>agregarTarea(e)}>
            <input type="text" name="texto" style={{width:250+"px", marginRight:10+"px",marginBottom:10+"px"}}/>
            <button type="submit"> Agregar tarea </button>
        </form>
  )
}
