import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import Button from "../Utils/Button";
import FormGroupFecha from "../Utils/FormGroupFecha";
import FormGroupImagen from "../Utils/FormGroupImagen";
import FormGroupMarkDown from "../Utils/FormGroupMarkDown";
import FormGroupText from "../Utils/FormGroupText";
import { actoresCreacionDTO } from "./Actores.model";

export default function FormularioActores(props: formularioActoresProps) {
    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es obligatorio')
                .primeraLetraMayuscula(),
                fechaNacimiento: Yup.date().nullable().required('Este campo es requerido')
            }
            )}>
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" />
                    <FormGroupFecha label="Fecha Nacimiento" campo="fechaNacimiento" />
                    <FormGroupImagen campo="foto" label="foto" imgUrl={props.modelo.fotoURL}/>
                    <FormGroupMarkDown campo="biografia" label="biografia"/>
                    <Button disabled={formikProps.isSubmitting}
                        type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}
interface formularioActoresProps {
    modelo: actoresCreacionDTO;
    onSubmit(valores: actoresCreacionDTO,
        acciones: FormikHelpers<actoresCreacionDTO>): void;
}