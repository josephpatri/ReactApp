export interface actoresCreacionDTO{
    nombre: string;
    fechaNacimiento?: Date;
    foto?: File;
    fotoURL?: string;
    biografia?: string;
}

export interface actorPeliculaDTO{
    id: number;
    nombre: string;
    personaje: string;
    foto: string;
}