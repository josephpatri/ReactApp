import { urlGeneros } from "../Utils/endpoints";
import IndiceEntidad from "../Utils/IndiceEntidad";
import { generoDTO } from "./GenerosModel";

export default function IndiceGeneros() {
    return (
        <>
            <IndiceEntidad<generoDTO> url={urlGeneros} urlCreacion="generos/crear"
                titulo="Géneros" nombreEntidad="Género">
                {(generos, botones) =>
                    <>
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
                                        {botones(`generos/editar/${genero.id}`, genero.id)}
                                    </td>
                                    <td>
                                        {genero.nombre}
                                    </td>
                                </tr>)}
                        </tbody>
                    </>}
            </IndiceEntidad>
        </>
    )
}