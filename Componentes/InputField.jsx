
export default function InputField({ etiqueta, tipo, valor, onChange }) {
    return (
      <div id='InputField' >
        <label>{etiqueta}</label>
        <input type={tipo} value={valor} onChange={onChange} />
      </div>
    );
  }