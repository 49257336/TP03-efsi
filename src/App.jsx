import './App.css'
import './Formulario.jsx'

function App() {
    const [count, setCount] = useState(0)
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <Formulario />
          <Listado />
        </div>
      </div>
    </>

  );
}

export default App
