import FormularioCines from "./FormularioCines";

export default function EditarCines(){
    return(
        <>
        <h3>Editar cines</h3>
        <FormularioCines
                modelo={{ nombre: 'Sambil', latitud: 37.634660, longitud: -1.699962 }}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}