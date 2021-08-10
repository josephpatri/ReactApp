import { actorPeliculaDTO } from "../Actores/Actores.model";
import { cineDTO } from "../Cines/Cines.model";
import { generoDTO } from "../Generos/GenerosModel";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas() {

    const generosNoSeleccionados: generoDTO[] = [{ id: 3, nombre: 'Comedia' }]

    const generosSeleccionados: generoDTO[] = [{ id: 1, nombre: 'Acción' },
    { id: 2, nombre: 'Drama' }]

    const cinesSeleccionados: cineDTO[] = [{ id: 2, nombre: 'Condomina' },
    { id: 3, nombre: 'Thader' }]

    const cinesNoSeleccionados: cineDTO[] = [{ id: 1, nombre: 'Almenara' }]

    const actoresSeleccionados: actorPeliculaDTO[] = [
        {
            id: 1, nombre: 'Joseph', personaje: 'Spider-Man',
            foto: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/03/andrew-garfield-spider-man.jpg?resize=1200%2C900&ssl=1'
        },        
        {
            id: 3, nombre: 'Andrew', personaje: '',
            foto: 'https://exmopedia.com/wp-content/uploads/2020/10/top-mejores-original-spiderman.jpg'
        }
    ]

    return (
        <>
            <h3>Editar peliculas</h3>
            <FormularioPeliculas
            generosNoSeleccionados={generosNoSeleccionados}
            generosSeleccionados={generosSeleccionados}
            cinesSeleccionados={cinesSeleccionados}
            cinesNoSeleccionados={cinesNoSeleccionados}
            actoresSeleccionados={actoresSeleccionados}
                modelo={{
                    titulo: 'Spider-Man', enCines: true, trailer: 'url',
                    fechaLanzamiento: new Date('2019-01-01T00:00:00')
                }}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}