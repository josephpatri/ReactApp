import { Redirect } from "react-router-dom"

export default function RedireccionarLanding(){
    return <Redirect to={{pathname: '/'}}/>
}