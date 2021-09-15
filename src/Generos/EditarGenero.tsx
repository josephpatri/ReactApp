import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import Cargando from "../Utils/Cargando";
import { urlGeneros } from "../Utils/endpoints";
import MostrarErrores from "../Utils/MostrarErrores";
import FormulariosGeneros from "./FormulariosGeneros";
import { GeneroCreacionDTO, generoDTO } from "./GenerosModel";

export default function EditarGenero(){

    const {id} : any = useParams();
    const [genero, setGenero] = useState<generoDTO>();
    const [errores, setErrores] = useState<string[]>([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`${urlGeneros}/${id}`)
        .then((respuesta: AxiosResponse<generoDTO>) => {
            setGenero(respuesta.data);
        })
    })

    async function editar(generoEditar: GeneroCreacionDTO){
        try{
            await axios.put(`${urlGeneros}/${id}`, generoEditar)
            history.push('/generos')
        }
        catch(error: any){
            setErrores(error.response.data);
        }
    }

    return(
        <>
        <h3>Editar Genero</h3>
        <MostrarErrores errores={errores}/>
        {genero ?  <FormulariosGeneros
            modelo={genero}
            onSubmit={async valores => {
                await editar(valores);
                
                
            }}/> : <Cargando/> }
          
        </>
    )
}