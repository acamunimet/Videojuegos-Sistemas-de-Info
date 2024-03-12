import '/Estilos/RegisterPage.css';
import InputField from '../Componentes/InputField';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div id='RegisterPage'>
      <div>
        <h1>REGISTRO</h1>
      </div>

      <div id="seccion1_RegisterPage-form" >
    <InputField etiqueta="correo"/>
    <InputField etiqueta="nombre"/>
    <InputField etiqueta="contraseña"/>
      </div>

      <div id="RegisterPage_submit_button">
        <Link to='/home'>
        <button>Enviar</button>
        </Link>
      </div>
    <Link to="/">
      <button >◄••</button>
      </Link>
    </div>
  );
}
