import { Link } from "react-router-dom";
import Button from "../Componentes/Button";
import "/Estilos/Landing_Page.css";

export default function Landing_Page() {
  return (
    <body>
      <section id="seccion1_LandingPage">
        <Link to="https://www.unimet.edu.ve/">
          <img
            id="LandingPage_titleImage"
            src="https://www.unimet.edu.ve/wp-content/uploads/2023/07/Logo-footer.png"
            alt="Description"
          />
        </Link>
        <div id="LandingPage_logo">
          <h1>GAMECLUB</h1>

          <img src="https://play-lh.googleusercontent.com/pEw9lhjwvCvhMD9h7KeGsCG11BnYo_LH8AXo2DDV_cAWIZdRtpxJS9Ds0-kmTrL-GF0" />
        </div>
      </section>

      <section id="seccion2_LandingPage">
        <h1>BIENVENIDO</h1>
        <p>
          <h4>INFORMACION GENERAL</h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
       
        </p>
      </section>

      <section id="seccion3_LandingPage">
        <div>
          <Button to="/login">Iniciar sesion</Button>
        </div>
        <div>
          <Button to="/register">Registrarse</Button>
        </div>
      </section>
    </body>
  );
}
