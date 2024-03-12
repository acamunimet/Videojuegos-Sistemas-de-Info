import { Link } from "react-router-dom";

export default function UserProfile_Page() {
  return (
    <>
      <div>
        <h1>PERFIL</h1>
        <Link to="/home">
          <button>Volver</button>
        </Link>
      </div>
      <div>
        <Link to="/games">
          <button>Juegos</button>
        </Link>
      </div>
    </>
  );
}
