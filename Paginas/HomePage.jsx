import Button from "../Componentes/Button";

export default function HomePage() {
    return (
        <>
        <div>
            <h1>HOMEPAGE / LISTA DE CLUBES</h1>
            <Button to='/'>Volver</Button>

        </div>
        <div>
            <Button to='/profile'>Perfil</Button>
        </div>
        <div>
            <Button to='/club'>Club</Button>
        </div>
        <div>
            <Button to='/games'>Juegos</Button>
        </div>
        </>
        
    );

}