import "../Estilos/Landing_Page.css"
import {Link} from "react-router-dom";

export default function Landing_Page() {
  return (
    <div>
      <div id="TituloLandingPage">
        <h1>¡¡Bienvenido!!</h1>
      </div>

      <div id="seccion1_LandingPage">
        <p>INFORMACION GENERAL DE LA PAGINA</p>
      </div>

      <div id="seccion2_LandingPage">
        <div>
          <button to='/login'>Iniciar sesion</button>
        </div>
        <div>
          <button to='/register' >Registrarse</button>
        </div>
      </div>
    </div>
  );
}
