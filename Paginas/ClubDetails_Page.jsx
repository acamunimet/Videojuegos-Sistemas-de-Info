import Button from "../Componentes/Button";

export default function ClubDetails_Page(){
    return (
        <>
        <div>
            <h1>CLUB</h1>
            <Button to='/home'>Volver</Button>
        </div>
        <div>
            <Button to='/profile'>Perfil</Button>
        </div>
        <div>
            <Button to='/games'>Juegos</Button>
        </div>
        </>
    )
}