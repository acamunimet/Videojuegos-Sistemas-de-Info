import "../Estilos/LoginPage.css";
import InputField from "../Componentes/InputField";
import { signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { auth, googleProvider } from "../Firebase";
import { createUser } from "../Controladores/users";
import { Link } from "react-router-dom";

export default function LoginPage() {
  async function handleClick() {
    const result = await signInWithPopup(auth, googleProvider);

    const additionalInfo = getAdditionalUserInfo(result);

    if (additionalInfo.isNewUser) {
      createUser(result.user.displayName, result.user.email);
    }
    console.log(additionalInfo);
  }

  return (
    <div id='LoginPage'>
      <div id="TituloLoginPage">
        <h1>LOGIN</h1>
      </div>

      <divid id="seccion1_LoginPage-form">
        <div >
          <InputField etiqueta="Correo" tipo="text" />

          <InputField etiqueta="Contraseña" tipo="text" />
        </div>
        <div id="LoginPage_submit_button">
          <Link to="/home">
            <button >Enviar</button>
          </Link>
        </div>

        <div id="LoginPage_submit_button_google">
          <button onClick={handleClick}>Iniciar Sesión con Google</button>
        </div>
      </divid>
      <Link to="/">
        <button>◄••</button>
      </Link>
    </div>
  );
}
