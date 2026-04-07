import { useState } from 'react';
import './App.css'
import Formulario from './Formulario.jsx'
import Listado from './Listado.jsx'


function App() {
  const [citas, setCitas] = useState([]);
  return (
      <>
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className="container">
          <div className="row">
            <Formulario setCitas={setCitas}/>
            <Listado citas={citas} setCitas={setCitas}/>
          </div>
        </div>
      </>
  );
}

export default App
