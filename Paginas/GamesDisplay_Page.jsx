import { Link } from "react-router-dom";


export default function GamesDisplay_Page(){
    return (
        <>
        <div>
            <h1>JUEGOS</h1>
            <Link to='/home'>
            <button >Volver</button>
            </Link>
        </div>
        <div>
        <Link to='/profile'>
            <button >Perfil</button>
            </Link>
        </div>
        </>
    )
    
}