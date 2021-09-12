import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { string } from "yup/lib/locale";
import { urlGeneros } from "../Utils/endpoints";
import MostrarErrores from "../Utils/MostrarErrores";
import FormulariosGeneros from "./FormulariosGeneros";
import { GeneroCreacionDTO } from "./GenerosModel";

export default function CrearGenero() {    
    const history = useHistory();
    const [errores, setErrores] = useState<string[]>([]);

    async function crearGenero(genero: GeneroCreacionDTO){
        try{
            await axios.post(urlGeneros, genero);
            history.push('/generos');
        }
        catch(error : any){                                                
            setErrores(error.response.data);
        }
    }

    return (
        <>
            <h3>Crear genero</h3>
            <MostrarErrores errores={errores}/>
            <FormulariosGeneros
            modelo={{nombre: ''}}
            onSubmit={async valores => {
                await crearGenero(valores);                
            }}/>            
        </>
    )
}