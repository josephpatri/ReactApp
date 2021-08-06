import { Formik, Form, FormikValues, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import FormGroupText from "../Utils/FormGroupText";
import * as Yup from 'yup'
import { GeneroCreacionDTO } from "./GenerosModel";

export default function FormulariosGeneros(props : formulariosGenerosprops){
    return(
        <Formik initialValues={props.modelo} onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                nombre: Yup.string().required('This field is required')
                .primeraLetraMayuscula()
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre"
                        placeholder="Escriba el genero" />

                    <Button disabled={formikProps.isSubmitting}
                        type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formulariosGenerosprops{
    modelo: GeneroCreacionDTO;
   onSubmit(valores: GeneroCreacionDTO, accion: FormikHelpers<GeneroCreacionDTO>): void;
}