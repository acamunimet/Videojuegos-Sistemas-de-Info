import "../Estilos/Landing_Page.css";
import { Link } from "react-router-dom";

export default function Landing_Page() {
  return (
    <body  id='LandingPage'> 
      <img
        id="logoUnimet"
        src="https://www.unimet.edu.ve/wp-content/uploads/2023/07/Logo-footer.png"
      />

      <div id="TituloLandingPage">
        <h1>Bienvenido</h1>
      </div>

      <div id="seccion1_LandingPage">
        <p>
          Bienvenido a Gameclub! Un sitio web donde puedes conocer a otras
          personas que compartan tu pasion por los videojuegos y formar parte de
          comunidades increibles que disfrutan tanto como tu el mundo del gaming
        </p>
      </div>

      <div id="seccion2_LandingPage">
        <div>
          <Link to="/login">
            <button>Iniciar sesion</button>
          </Link>
        </div>
        <div>
          <Link to="/register">
            <button>Registrarse</button>
          </Link>
        </div>
      </div>
    </body>
  );
}
