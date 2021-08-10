import { Form, Formik, FormikHelpers } from "formik";
import { peliculaCreacionDTO } from "./Peliculas.module";
import * as Yup from 'yup'
import FormGroupText from "../Utils/FormGroupText";
import FormGroupCheckBox from "../Utils/FormGroupCheckBox";
import FormGroupFecha from "../Utils/FormGroupFecha";
import FormGroupImagen from "../Utils/FormGroupImagen";
import Button from "../Utils/Button";
import { Link } from "react-router-dom";
import SelectorMultiple, { selectorMultipleModel } from "../Utils/SelectorMultiple";
import { generoDTO } from "../Generos/GenerosModel";
import { useState } from "react";
import { cineDTO } from "../Cines/Cines.model";
import TypeAheadActores from "../Actores/TypeAheadActores";
import { actorPeliculaDTO } from "../Actores/Actores.model";

export default function FormularioPeliculas(props: formularioPeliculasProps) {
    const [generosSeleccionados, setgenerosSeleccionados] =
        useState(mapear(props.generosSeleccionados));

    const [generosNoSeleccionados, setgenerosNoSeleccionados] =
        useState(mapear(props.generosNoSeleccionados));


    const [cinesSeleccionados, setCinesSeleccionados] =
        useState(mapear(props.cinesSeleccionados));


    const [cinesNoSeleccionados, setCinesNoSeleccionados] =
        useState(mapear(props.cinesNoSeleccionados));

    const [actoresSeleccionados, setActoresSeleccionados] =
        useState<actorPeliculaDTO[]>(props.actoresSeleccionados)


    function mapear(arreglo: { id: number, nombre: string }[]): selectorMultipleModel[] {
        return arreglo.map(valor => {
            return { llave: valor.id, valor: valor.nombre }
        })
    }

    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={(valores, acciones) => {
                valores.generosIds = generosSeleccionados.map(valor => valor.llave);
                valores.cinesIds = cinesSeleccionados.map(valor => valor.llave)   
                valores.actores = actoresSeleccionados             
                props.onSubmit(valores, acciones)
            }}
            validationSchema={Yup.object({
                titulo: Yup.string().required('Este campo es requerido')
                    .primeraLetraMayuscula()
            })}>
            {formikProps => (
                <Form>
                    <FormGroupText label="Titulo" campo="titulo" />
                    <FormGroupCheckBox label="En Cines" campo="enCines" />
                    <FormGroupText label="Trailer" campo="trailer" />
                    <FormGroupFecha campo="fechaLanzamiento" label="Fecha Lanzamiento" />
                    <FormGroupImagen campo="poster" label="Poster"
                        imgUrl={props.modelo.posterURL} />
                    <div className="form-group">
                        <label>Géneros:</label>
                        <SelectorMultiple seleccionados={generosSeleccionados}
                            noSeleccionados={generosNoSeleccionados}
                            onChange={(seleccionados, noSeleccionados) => {
                                setgenerosSeleccionados(seleccionados);
                                setgenerosNoSeleccionados(noSeleccionados);
                            }} />
                    </div>

                    <div className="form-group">
                        <label>Cines:</label>
                        <SelectorMultiple seleccionados={cinesSeleccionados}
                            noSeleccionados={cinesNoSeleccionados}
                            onChange={(seleccionados, noSeleccionados) => {
                                setCinesSeleccionados(seleccionados);
                                setCinesNoSeleccionados(noSeleccionados);
                            }} />
                    </div>

                    <div className="form-group">
                        <TypeAheadActores
                            onAdd={actores => {
                                setActoresSeleccionados(actores);
                            }}
                            onRemove={actor => {
                                const actores = actoresSeleccionados.
                                filter(x => x !== actor);
                                setActoresSeleccionados(actores);
                            }}
                            actores={actoresSeleccionados}
                            listadoUI={(actor: actorPeliculaDTO) =>
                                <>
                                    {actor.nombre} / <input type="text" placeholder="Personaje"
                                        value={actor.personaje}
                                        onChange={e => {
                                            const indice = actoresSeleccionados.findIndex
                                                (x => x.id === actor.id);

                                            const actores = [...actoresSeleccionados];
                                            actores[indice].personaje = e.currentTarget.value;
                                            setActoresSeleccionados(actores);
                                        }} />
                                </>}
                        />
                    </div>

                    <Button disabled={formikProps.isSubmitting} type="submit">Enviar</Button>
                    <Link className="btn btn-secondary" to="/">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formularioPeliculasProps {
    modelo: peliculaCreacionDTO;
    onSubmit(valores: peliculaCreacionDTO, acciones: FormikHelpers<peliculaCreacionDTO>): void;
    generosSeleccionados: generoDTO[];
    generosNoSeleccionados: generoDTO[];
    cinesSeleccionados: cineDTO[];
    cinesNoSeleccionados: cineDTO[];
    actoresSeleccionados: actorPeliculaDTO[];
}