import { Link } from "react-router-dom";
import { urlActores } from "../Utils/endpoints";
import Indiceentidad from "../Utils/IndiceEntidad";
import { actorDTO } from "./Actores.model";

export default function IndiceActores() {
    return (
        <>
            <Indiceentidad<actorDTO> url={urlActores} urlCreacion="actores/crear"
                titulo="Actores" nombreEntidad="Actor">
                {(actores, botones) =>
                    <>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {actores?.map(actor =>
                                <tr key={actor.id}>
                                    <td>
                                        {botones(`actores/editar/${actor.id}`, actor.id)}
                                    </td>
                                    <td>
                                        {actor.nombre}
                                    </td>
                                </tr>)}
                        </tbody>
                    </>}
            </Indiceentidad>
        </>
    )
}