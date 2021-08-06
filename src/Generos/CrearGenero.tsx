import FormulariosGeneros from "./FormulariosGeneros";

export default function CrearGenero() {
    //const history = useHistory();
    return (
        <>
            <h3>Crear genero</h3>
            <FormulariosGeneros
            modelo={{nombre: ''}}
            onSubmit={async valores => {
                await new Promise(r => setTimeout(r, 3000))
                console.log(valores)
                
            }}/>            
        </>
    )
}