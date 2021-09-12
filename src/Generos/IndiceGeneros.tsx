import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { urlGeneros } from "../Utils/endpoints";
import { generoDTO } from "./GenerosModel";

export default function IndiceGeneros(){
    useEffect(() => {
        axios.get(urlGeneros)
        .then((respuesta: AxiosResponse<generoDTO[]>) => {
            console.log(respuesta.data);
        })
    }, [])    
    return(
        <>
        <h3>Generos</h3>
        <Link className="btn btn-primary" to="generos/crear">Crear genero</Link>
        </>
    )
}