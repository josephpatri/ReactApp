import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { urlActores } from "../Utils/endpoints";
import { ConvertirActoraFormData } from "../Utils/FormDataUtils";
import MostrarErrores from "../Utils/MostrarErrores";
import { actoresCreacionDTO } from "./Actores.model";
import FormularioActores from "./FormularioActores";

export default function CrearActores() {

    const history = useHistory();
    const [errores, setErrores] = useState<string[]>([]);

    async function Crear(actor: actoresCreacionDTO) {
        try {
            const formData = ConvertirActoraFormData(actor);
            await axios({
                method: 'post',
                url: urlActores,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'}
            });
            history.push('/actores')
        }
        catch (error: any) {
            setErrores(error);
            console.log(error.response.data);
        }
    }

    return (
        <>
            <h3>Crear actores</h3>
            <MostrarErrores errores={errores} />
            <FormularioActores
                modelo={{ nombre: '', fechaNacimiento: undefined }}
                onSubmit={async valores => {
                    await Crear(valores)
                }} />
        </>
    )
}