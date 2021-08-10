import { useState } from "react";
import { ReactElement } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { actorPeliculaDTO } from "./Actores.model";

export default function TypeAheadActores(props: typeAheadProps) {

    const actores: actorPeliculaDTO[] = [
        {
            id: 1, nombre: 'Joseph', personaje: 'Spider-Man',
            foto: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/03/andrew-garfield-spider-man.jpg?resize=1200%2C900&ssl=1'
        },
        {
            id: 2, nombre: 'Patricio', personaje: 'Hulk',
            foto: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Mark_Ruffalo_%2836201774756%29_%28cropped%29.jpg'
        },
        {
            id: 3, nombre: 'Andrew', personaje: '',
            foto: 'https://exmopedia.com/wp-content/uploads/2020/10/top-mejores-original-spiderman.jpg'
        }
    ]

    const seleccion: actorPeliculaDTO[] = []

    const [elementoArrastrado, setElementoArrastrado] = useState<actorPeliculaDTO |
        undefined>(undefined)

    function manejarDragStart(actor: actorPeliculaDTO) {
        setElementoArrastrado(actor);
    }

    function manejarDragOver(actor: actorPeliculaDTO) {
        if (!elementoArrastrado) {
            return
        }

        if (actor.id !== elementoArrastrado.id) {
            const elementoArrastradoIndice = props.actores.findIndex
                (x => x.id === elementoArrastrado.id);
            const actorIndice = props.actores.findIndex
                (x => x.id === actor.id);

            const actores = [...props.actores];
            actores[actorIndice] = elementoArrastrado;
            actores[elementoArrastradoIndice] = actor;

            props.onAdd(actores);
        }
    }



    return (
        <>
            <label>Actores:</label>
            <Typeahead id="typeahead"
                onChange={actores => {
                    if (props.actores.findIndex(x => x.id === actores[0].id) === -1) {
                        props.onAdd([...props.actores, actores[0]]);
                    }
                }}
                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor..."
                minLength={2}
                flip={true}
                selected={seleccion}
                renderMenuItemChildren={actor => (
                    <>
                        <img src={actor.foto} alt="imagen actor"
                            style={{
                                height: '64px',
                                marginRight: '10px',
                                width: '64px',
                            }}
                        />
                        <span>{actor.nombre}</span>
                    </>
                )}
            />

            <ul className="list-group">
                {props.actores.map(actor => <li
                    draggable={true}
                    onDragStart={() => manejarDragStart(actor)}
                    onDragOver={() => manejarDragOver(actor)}
                    className="list-group-item list-group-item-action"
                    key={actor.id}>
                    {props.listadoUI(actor)}
                    <span className="badge badge-primary badge-pill pointer"
                        style={{ marginLeft: '0.5rem' }}
                        onClick={() => props.onRemove(actor)}
                    >X</span>
                </li>)}
            </ul>

        </>
    )
}

interface typeAheadProps {
    actores: actorPeliculaDTO[];
    onAdd(actores: actorPeliculaDTO[]): void
    onRemove(actores: actorPeliculaDTO): void
    listadoUI(actor: actorPeliculaDTO): ReactElement
}