import { useEffect, useState } from "react";
import ListadoPeliculas from "./Peliculas/ListadoPeliculas";
import { LandingPageDTO } from "./Peliculas/Peliculas.module";

export default function LadingPage() {

    const [peliculas, setPeliculas] = useState<LandingPageDTO>({});


    useEffect(() => {
        const timerid = setTimeout(() => {
            setPeliculas({
                enCartelera: [
                    {
                        id: 1, titulo: "Superman",
                        poster: 'https://static.posters.cz/image/750/posters/la-liga-de-la-justicia-superman-i51000.jpg'
                    },
                    {
                        id: 2, titulo: "SpiderMan",
                        poster: 'https://m.media-amazon.com/images/I/61TUX3ObSLL._AC_.jpg'
                    },
                ],
                proximosEstrenos: [
                    {
                        id: 3, titulo: "Terminator",
                        poster: 'https://static.carrefour.es/hd_510x_/imagenes/products/21000/00213/868/2100000213868/imagenGrande1.jpg'
                    },
                    {
                        id: 4, titulo: "Rambo",
                        poster: 'https://m.media-amazon.com/images/I/81HlRJ0CRdL._AC_SY741_.jpg'
                    },
                ]
            })
        }, 500)

        return () => clearTimeout(timerid);
    })

    return (
        <>
            <h3>Peliculas en cartelera</h3>
                <ListadoPeliculas peliculas={peliculas.enCartelera} />
            <h3>Proximos estrenos</h3>
                <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>
    )
}