import FormularioCines from "./FormularioCines";

export default function CrearCine() {
    return (
        <>
            <h3>Crear cine</h3>
                <FormularioCines modelo={{nombre: ''}} 
                onSubmit={async valores => {
                    await new Promise(r => setTimeout(r, 1000))
                    console.log(valores)}}
                />

        </>
    )
}