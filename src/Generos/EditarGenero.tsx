//import { useParams } from "react-router-dom"
import FormulariosGeneros from "./FormulariosGeneros";

export default function EditarGenero(){

    //const {id} : any = useParams();

    return(
        <>
        <h3>Editar Genero</h3>
         <FormulariosGeneros
            modelo={{nombre: 'Acción'}}
            onSubmit={async valores => {
                await new Promise(r => setTimeout(r, 3000))
                console.log(valores)
                
            }}/>   
        </>
    )
}