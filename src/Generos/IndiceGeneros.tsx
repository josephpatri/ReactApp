import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import { urlGeneros } from "../Utils/endpoints";
import ListadoGenerico from "../Utils/ListadoGenerico";
import { generoDTO } from "./GenerosModel";

export default function IndiceGeneros() {

    const [generos, setGeneros] = useState<generoDTO[]>();

    useEffect(() => {
        axios.get(urlGeneros)
            .then((respuesta: AxiosResponse<generoDTO[]>) => {
                console.log(respuesta.data);
                setGeneros(respuesta.data);
            })
    }, [])
    return (
        <>
            <h3>Generos</h3>
            <Link className="btn btn-primary" to="generos/crear">Crear genero</Link>


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
                                    <Link className="btn btn-success" to={`/generos/${genero.id}`}>
                                        Editar
                                    </Link>
                                    <Button className="btn btn-danger">Borrar</Button>
                                </td>
                                <td>
                                    {genero.nombre}
                                </td>
                            </tr>)}
                    </tbody>
                </table>

            </ListadoGenerico>

        </>
    )
}