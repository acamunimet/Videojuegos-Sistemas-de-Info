import { Link } from "react-router-dom"


export default function ClubDetails_Page(){
    return (
        <>
        <div>
            <h1>CLUB</h1>
            <Link to='/home'>
            <button >Volver</button>
            </Link>
        </div>
        <div>
        <Link to='/profile'>
            <button >Perfil</button>
            </Link>
        </div>
        <div>
        <Link to='/games'>
            <button >Juegos</button>
            </Link>
        </div>
        </>
    )
}