
export const FormularioTarea = () => {

    const agregarTarea = (e) =>{
        console.log("Tarea agregada")
        e.preventDefault();
        e.stopPropagation();
    }

  return (
        <form onSubmit={agregarTarea}>
            <input type="text" name="texto" style={{width:250+"px", marginRight:10+"px",marginBottom:10+"px"}}/>
            <button type="submit"> Agregar tarea </button>
        </form>
  )
}
