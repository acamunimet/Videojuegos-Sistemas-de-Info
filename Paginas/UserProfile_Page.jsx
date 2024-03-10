import Button from "../Componentes/Button";

export default function UserProfile_Page(){
    return (
        <>
        <div>
            <h1>PERFIL</h1>
            <Button to='/home'>Volver</Button>
        </div>
        <div>
            <Button to='/games'>Juegos</Button>
        </div>
        </>
    )
}