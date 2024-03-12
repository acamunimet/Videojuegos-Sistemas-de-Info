import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div>
        <h1>HOMEPAGE / LISTA DE CLUBES</h1>
        <Link to="/">
          <button>Volver</button>
        </Link>
      </div>
      <div>
       <Link to='/profile'><button>perfil</button></Link>
       <Link to='/club'><button>club</button></Link>
       <Link to='/games'><button>juegos</button></Link>
      </div>
    </>
  );
}
