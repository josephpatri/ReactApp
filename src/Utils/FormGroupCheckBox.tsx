import { Field } from "formik";

export default function FormGroupCheckBox(props: formGroupCheckBox){
    return(
        <div className="form-group form-check">
            <Field className="form-check-input" id={props.campo} name={props.campo}
            type="checkbox"/>
            <label htmlFor={props.campo}>{props.label}</label>
        </div>        
    )
}

interface formGroupCheckBox{
    label: string;
    campo: string;
}