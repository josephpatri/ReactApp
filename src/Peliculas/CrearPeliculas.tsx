import { cineDTO } from "../Cines/Cines.model";
import { generoDTO } from "../Generos/GenerosModel";
import FormularioPeliculas from "./FormularioPeliculas";

export default function CrearPeliculas() {

    const generos: generoDTO[] = [{ id: 1, nombre: 'Acción' },
    { id: 2, nombre: 'Drama' }, { id: 3, nombre: 'Comedia' }]


    const cines: cineDTO[] = [{ id: 1, nombre: 'Almenara' },
    { id: 2, nombre: 'Condomina' }, { id: 3, nombre: 'Thader' }]

    return (
        <>
            <h3>Crear peliculas</h3>
            <FormularioPeliculas
                generosNoSeleccionados={generos}
                generosSeleccionados={[]}
                cinesNoSeleccionados={cines}
                cinesSeleccionados={[]}
                actoresSeleccionados={[]}
                modelo={{ titulo: '', enCines: false, trailer: '' }}
                onSubmit={valores => console.log(valores)}

            />
        </>
    )
}