import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ReactElement } from "react-markdown";
import { useHistory, useParams } from "react-router-dom";
import Cargando from "./Cargando";
import MostrarErrores from "./MostrarErrores";

export default function EditarEntidad<TCreacion, TLectura>(props: 
    editarEntidadProps<TCreacion, TLectura>) {

    const { id }: any = useParams();
    const [entidad, setEntidad] = useState<TCreacion>();
    const [errores, setErrores] = useState<string[]>([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`${props.url}/${id}`)
            .then((respuesta: AxiosResponse<TLectura>) => {
                setEntidad(props.transformar(respuesta.data));
            })    
    },[])

    async function editar(entidadEditar: TCreacion) {
        try {
            await axios.put(`${props.url}/${id}`, entidadEditar)
            history.push(props.urlIndice)
        }
        catch (error: any) {
            setErrores(error.response.data);
        }
    }

    return (
        <>
            <h3>Editar {props.nombreEntidad}</h3>
            <MostrarErrores errores={errores} />
            {entidad ? props.children(entidad, editar) : <Cargando/> }
        </>
    )

}

interface editarEntidadProps<TCreacion, TLectura>{
    url: string;
    urlIndice: string;
    nombreEntidad: string;
    children(entidad: TCreacion, editar: (entidad: TCreacion) => void) : ReactElement;
    transformar(entidad: TLectura): TCreacion;
}

EditarEntidad.defaultProps = {
    transformar: (entidad: any) => entidad
}


