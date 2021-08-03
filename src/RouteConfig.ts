import CrearActor from "./Actores/CrearActores";
import EditarActores from "./Actores/EditarActores";
import IndiceActores from "./Actores/IndiceActores";
import CrearCine from "./Cines/CrearCine";
import EditarCines from "./Cines/EditarCines";
import IndiceCines from "./Cines/IndiceCines";
import CrearGenero from "./Generos/CrearGenero";
import EditarGenero from "./Generos/EditarGenero";
import IndiceGeneros from "./Generos/IndiceGeneros";
import LadingPage from "./LandingPage";
import CrearPeliculas from "./Peliculas/CrearPeliculas";
import EditarPeliculas from "./Peliculas/EditarPeliculas";
import FiltroPeliculas from "./Peliculas/FiltroPeliculas";
import RedireccionarLanding from "./Utils/RedireccionarLading";

const rutas = [    
    {path: '/generos/crear', componente: CrearGenero},
    {path: '/generos/editar/:id(\\d+)', componente: EditarGenero},
    {path: '/generos', componente: IndiceGeneros, exact: true},

    {path: '/actores/crear', componente: CrearActor},
    {path: '/actores/editar/:id(\\d+)', componente: EditarActores},
    {path: '/actores', componente: IndiceActores, exact: true},

    {path: '/cines/crear', componente: CrearCine},
    {path: '/cines/editar/:id(\\d+)', componente: EditarCines},
    {path: '/cines', componente: IndiceCines, exact: true},

    {path: '/peliculas/crear', componente: CrearPeliculas},
    {path: '/peliculas/editar/:id(\\d+)', componente: EditarPeliculas},
    {path: '/peliculas/filtro', componente: FiltroPeliculas, exact: true},

    {path: '/', componente: LadingPage, exact: true},

    {path: '*', componente: RedireccionarLanding} 
];

export default rutas;