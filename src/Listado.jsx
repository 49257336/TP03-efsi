import './Listado.css'
import Cita from './Cita.jsx'

function Listado({citas, setCitas}){

    const eliminarCita = (id) => {
        const nuevasCitas = citas.filter(cita => cita.id !== id);
        setCitas(nuevasCitas);
    };
    
    return(
        <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map(cita => (
                <Cita
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                />
            ))}
            </div>
    );
}

export default Listado