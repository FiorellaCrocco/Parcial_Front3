import { useState } from "react";

const Form = ({ mostrarDatos }) => {
  const [nombre, setNombre] = useState("");
  const [libro, setLibro] = useState("");
  const [msgError, setMsgError] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    if(nombre.length < 3 || nombre.trimStart() !== nombre || libro.length < 6){
        setMsgError("Por favor chequea que la información sea correcta");
        return;
    } else {
        mostrarDatos(nombre, libro), setNombre(""), setLibro(""), setMsgError("")
    }
    
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handlerSubmit}  className='form'>
        <label>
          <p>Ingrese su nombre:</p>
          <input
            placeholder="Ingrese su nombre"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </label>
        <label>
          <p>Ingrese su libro favorito:</p>
          <input
            placeholder="Ingrese su libro favorito"
            value={libro}
            onChange={(e) => {
              setLibro(e.target.value);
            }}
          />
        </label>
        <button type="submit" className="btn">Enviar</button>
      </form>
        {msgError && <p id="error">{msgError}</p>}
    </div>
  );
};

export default Form;
