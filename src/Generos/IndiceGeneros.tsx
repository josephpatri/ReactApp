import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import { urlGeneros } from "../Utils/endpoints";
import ListadoGenerico from "../Utils/ListadoGenerico";
import Paginacion from "../Utils/Paginacion";
import { generoDTO } from "./GenerosModel";
import confirmar from '../Utils/Confirmar';

export default function IndiceGeneros() {

    const [generos, setGeneros] = useState<generoDTO[]>();
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [RecordsPage, setTotalRecords] = useState(10);
    const [page, setPage] = useState(1);


    useEffect(() => {
        cargarDatos();
        // eslint-disable-net-line react-hooks/exhaustive-deps
    }, [page, RecordsPage])


    function cargarDatos() {
        axios.get(urlGeneros, {
            params: { page, RecordsPage }
        })
            .then((respuesta: AxiosResponse<generoDTO[]>) => {
                const totalDeRegistros = parseInt(respuesta.headers['totalrecords'], 10);
                setTotalPaginas(Math.ceil(totalDeRegistros / RecordsPage))
                console.log(respuesta.data);
                setGeneros(respuesta.data);
            })
    }


    async function borrar(id: number) {
        try {
            await axios.delete(`${urlGeneros}/${id}`)
            cargarDatos();
        }
        catch (error: any) {
            console.log(error.response.data);
        }
    }


    return (
        <>
            <h3>Generos</h3>
            <Link className="btn btn-primary" to="generos/crear">Crear genero</Link>
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

            <ListadoGenerico listado={generos}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos?.map(genero =>
                            <tr key={genero.id}>
                                <td>
                                    <Link className="btn btn-success" to={`/generos/editar/${genero.id}`}>
                                        Editar
                                    </Link>
                                    <Button
                                        onClick={() => confirmar(() => borrar(genero.id))}
                                        className="btn btn-danger">Borrar</Button>
                                </td>
                                <td>
                                    {genero.nombre}
                                </td>
                            </tr>)}
                    </tbody>
                </table>

            </ListadoGenerico>

        </>)
}