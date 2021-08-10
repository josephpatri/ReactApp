import { Form, Formik, FormikHelpers } from "formik";
import { cineCracionDTO } from "./Cines.model";
import * as Yup from 'yup'
import FormGroupText from "../Utils/FormGroupText";
import Button from "../Utils/Button";
import { Link } from "react-router-dom";
import Mapa from "../Utils/Mapa";
import MapaFormulario from "../Utils/MapaFormulario";
import { coordenadaDTO } from "../Utils/coordenadaDTO.model";

export default function FormularioCines(props: formularioCinesProps) {

    function transformarCoordenadas() : coordenadaDTO[] | undefined {
        if(props.modelo.latitud  && props.modelo.longitud){
            const respuesta: coordenadaDTO = {lat: props.modelo.latitud, 
                lng: props.modelo.longitud};
            return [respuesta]
        }
        return undefined;
    }

    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es obligatorio')
                    .primeraLetraMayuscula()                
            })}>

            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" />       

                    <div style={{marginTop: '1rem'}}>
                        <MapaFormulario campoLat="latitud" campoLng="longitud"
                            coordenadas={transformarCoordenadas()}
                        />
                    </div>
                    
                    <Button disabled={formikProps.isSubmitting}
                        type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/cines">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formularioCinesProps {
    modelo: cineCracionDTO;
    onSubmit(valores: cineCracionDTO, acciones: FormikHelpers<cineCracionDTO>): void
}
