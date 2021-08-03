import { Form, Formik } from "formik";
import { Link } from "react-router-dom"
import Button from "../Utils/Button";
import * as Yup from 'yup'
import FormGroupText from "../Utils/FormGroupText";

export default function CrearGenero() {
    //const history = useHistory();
    return (
        <>
            <h3>Crear genero</h3>
            <Formik initialValues={{
                nombre: ''
            }} onSubmit={async values => {
                    await new Promise(r => setTimeout(r, 100));
                    console.log(values)
                }}

                validationSchema={Yup.object({
                    nombre: Yup.string().required('This field is required').primeraLetraMayuscula()
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
        </>
    )
}