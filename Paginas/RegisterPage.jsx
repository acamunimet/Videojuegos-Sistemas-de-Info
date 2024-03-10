import '/Estilos/RegisterPage.css';
import Button from "../Componentes/Button";
import InputField from '../Componentes/InputField';


export default function RegisterPage() {
  return (
    <div>
      <div>
        <h1>REGISTRO</h1>
      </div>

      <div id="seccion1_RegisterPage-form" >
    <InputField etiqueta="correo"/>
    <InputField etiqueta="nombre"/>
    <InputField etiqueta="contraseña"/>
      </div>

      <div id="RegisterPage_submit_button">
        <Button to='/home'>Enviar</Button>
      </div>

      <Button to="/">Volver</Button>
    </div>
  );
}
