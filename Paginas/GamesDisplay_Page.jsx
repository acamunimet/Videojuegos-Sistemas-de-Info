import Button from "../Componentes/Button";

export default function GamesDisplay_Page(){
    return (
        <>
        <div>
            <h1>JUEGOS</h1>
            <Button to='/home'>Volver</Button>
        </div>
        <div>
            <Button to='/profile'>Perfil</Button>
        </div>
        </>
    )
    
}