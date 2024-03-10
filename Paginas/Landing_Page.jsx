import Button from "../Componentes/Button";
import "/Estilos/Landing_Page.css"
import {Link} from "react-router-dom";

export default function Landing_Page() {
  return (
    <div>
      <div id="TituloLandingPage">
        <h1>Bienvendo!!</h1>
      </div>

      <div id="seccion1_LandingPage">
        <p>INFORMACION GENERAL DE LA PAGINA</p>
      </div>

      <div id="seccion2_LandingPage">
        <div>
          <Button to='/login'>Iniciar sesion</Button>
        </div>
        <div>
          <Button to='/register' >Registrarse</Button>
        </div>
      </div>
    </div>
  );
}
