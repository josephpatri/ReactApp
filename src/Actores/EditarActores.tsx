import FormularioActores from "./FormularioActores";


export default function EditarActores() {
    return (
        <><h3>Editar Actor</h3>
            <FormularioActores
                modelo={{
                    biografia: `# Tom
Ha necido en **Londres**`,
                    nombre: 'Tom Holland', fechaNacimiento
                        : new Date('1996-01-01T00:00:00'),
                        fotoURL: 'https://m.media-amazon.com/images/M/MV5BMTkxMzk2MDkwOV5BMl5BanBnXkFtZTcwMDAxODQwMg@@._V1_UX214_CR0,0,214,317_AL_.jpg'
                }}
                onSubmit={valores => console.log(valores)} />
        </>
    )
}