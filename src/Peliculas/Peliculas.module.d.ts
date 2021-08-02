export interface pelicula{
    id: number;
    titulo: string;
    poster: string;
}

export interface LandingPageDTO{
    enCartelera? : pelicula[];
    proximosEstrenos? : pelicula[]
}