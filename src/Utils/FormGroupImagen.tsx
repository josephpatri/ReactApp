import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

export default function FormGroupImagen(props: formGroupImagenProps) {

    const divStyle = {marginTop: '10px'}
    const imgStyle = {width: '450px'}

    const [imagBase64, setimgBase64] = useState('');
    const [imgUrl, setimgUrl] = useState(props.imgUrl);
    const { values } = useFormikContext<any>();

    const Manejaronchange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const archivo = e.currentTarget.files[0];
            abase64(archivo).then(
                (representacionBase64: string) => setimgBase64(representacionBase64))
                .catch(error => console.error(error))

            values[props.campo] = archivo;
            setimgUrl('')
        }
    }

    const abase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        })
    }

    return (
        <div className="form-group">
            <label>{props.label}</label>
            <div>
                <input type="file" accept=".jpg,.jpeg,.png" onChange={Manejaronchange} />
                {imagBase64 ?
                    <div>
                        <div style={divStyle}>
                            <img style={imgStyle} src={imagBase64} alt="Imagen seleccionada" />
                        </div>
                    </div> : null}
                {imgUrl ?
                <div>
                    <div style={divStyle}>
                        <img style={imgStyle} src={imgUrl} alt="Imagen seleccionada" />
                    </div>
                </div> : null}
            </div>
        </div>
    )
}

interface formGroupImagenProps {
    campo: string;
    label: string;
    imgUrl: string;
}

FormGroupImagen.defaultProps = {
    imgUrl: ''
}