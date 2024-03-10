import Button from "../Componentes/Button";
import "/Estilos/LoginPage.css";
import InputField from "../Componentes/InputField";

export default function LoginPage() {
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
        <Button to='/home' >Enviar</Button>
      </div>
      
      </div>
      <Button to="/">Volver</Button>
    </div>
  );
}
