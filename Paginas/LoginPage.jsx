import "../Estilos/LoginPage.css";
import InputField from "../Componentes/InputField";
import { signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { auth, googleProvider } from "../Firebase";
import { createUser } from "../Controladores/users";

export default function LoginPage() {

  async function handleClick() {
    const result = await signInWithPopup(auth, googleProvider);

    const additionalInfo = getAdditionalUserInfo(result);

    if (additionalInfo.isNewUser) {
      createUser(result.user.displayName, result.user.email)  
    }
    console.log(additionalInfo)
  }

  return (
    <div>
      <div id="TituloLoginPage">
        <h1>LOGIN</h1>
      </div>

      <div  >
        <div id="seccion1_LoginPage-form" >
      <InputField
      etiqueta="Correo"
      tipo="text"
      />
      
      <InputField
      etiqueta="Contraseña"
      tipo="text"
      />
      </div>
        <div id="LoginPage_submit_button">
          <button to='/home' >Enviar</button>
        </div>
      
        <div id="LoginPage_submit_button">
          <button onClick={handleClick}>Iniciar Sesión con Google</button>
        </div>
      </div>
      <button to="/">Volver</button>
    </div>
  );
}
