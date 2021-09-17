import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { ReactElement } from "react-markdown";
import { Link } from "react-router-dom";
import { generoDTO } from "../Generos/GenerosModel";
import Button from "./Button";
import confirmar from "./Confirmar";
import { urlGeneros } from "./endpoints";
import ListadoGenerico from "./ListadoGenerico";
import Paginacion from "./Paginacion";

export default function Indiceentidad<T>(props: indiceEntidadProps<T>) {

    const [entidades, setEntidades] = useState<T[]>();
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [RecordsPage, setTotalRecords] = useState(10);
    const [page, setPage] = useState(1);


    useEffect(() => {
        cargarDatos();
        // eslint-disable-net-line react-hooks/exhaustive-deps
    }, [page, RecordsPage])


    function cargarDatos() {
        axios.get(props.url, {
            params: { page, RecordsPage }
        })
            .then((respuesta: AxiosResponse<T[]>) => {
                const totalDeRegistros = parseInt(respuesta.headers['totalrecords'], 10);
                setTotalPaginas(Math.ceil(totalDeRegistros / RecordsPage))
                setEntidades(respuesta.data);
            })
    }


    async function borrar(id: number) {
        try {
            await axios.delete(`${props.url}/${id}`)
            cargarDatos();
        }
        catch (error: any) {
            console.log(error.response.data);
        }
    }

    const botones = (urlEditar: string, id: number) =>
        <>
            <Link className="btn btn-success" to={urlEditar}>
                Editar
            </Link>
            <Button
                onClick={() => confirmar(() => borrar(id))}
                className="btn btn-danger">Borrar</Button>
        </>


    return (
        <>
            <h3>{props.titulo}</h3>
            <Link className="btn btn-primary" to={props.urlCreacion}>
                Crear {props.nombreEntidad}
            </Link>
            <div className="form-group" style={{ width: '150px' }}>
                <label>Registros por pagina</label>
                <select
                    defaultValue={10}
                    onChange={e => {
                        setPage(1);
                        setTotalRecords(parseInt(e.currentTarget.value, 10))
                    }
                    }
                    className="form-control">
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>

            <Paginacion cantidadTotalDePaginas={totalPaginas} paginaActual={page}
                onChange={nuevaPagina => setPage(nuevaPagina)} />

            <ListadoGenerico listado={entidades}>
                <table className="table table-striped">
                    {props.children(entidades!, botones)}
                </table>
            </ListadoGenerico>
        </>
    )
}

interface indiceEntidadProps<T> {
    url: string;
    urlCreacion: string;
    children(entidades: T[], botones: (urlEditar: string, id: number)
        => ReactElement): ReactElement;
    titulo: string
    nombreEntidad: string;
}