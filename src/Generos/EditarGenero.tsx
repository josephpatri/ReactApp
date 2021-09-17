import EditarEntidad from "../Utils/EditarEntidad";
import { urlGeneros } from "../Utils/endpoints";
import FormulariosGeneros from "./FormulariosGeneros";
import { GeneroCreacionDTO, generoDTO } from "./GenerosModel";

export default function EditarGenero() {


    return (
        <>
            <EditarEntidad<GeneroCreacionDTO, generoDTO>
            url={urlGeneros} urlIndice="/generos" nombreEntidad="Géneros"
            >
                {(entidad, editar) => <FormulariosGeneros
                    modelo={entidad}
                    onSubmit={async valores => {
                        await editar(valores);
                    }} />}
            </EditarEntidad>
        </>
    )
}