import { useState } from 'react'
import Form from "./Components/Form"
import Card from "./Components/Card"
import  "./App.css"

function App() {
 const [datos, setDatos] = useState({nombre: "", libro: ""});
 const [contenido, setContenido] = useState(false);

 const mostrarDatos = (nom, lib) => {
  
  let nuevoDato = {
    nombre: nom,
    libro: lib
  }

  setDatos(nuevoDato);
  setContenido(true);

 }
 
 return (
    <div>
      <Form mostrarDatos={mostrarDatos}/>
      { contenido && <Card datos={datos}/>  }
    </div>
  )

}

export default App
