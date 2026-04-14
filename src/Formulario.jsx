import './Formulario.css'
import { useState } from 'react';

function Formulario({ setCitas }){
    const [duenio, setDuenio] = useState("");
    const [mascota, setMascota] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [sintomas, setSintomas] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevaCita = {
            id: Date.now(),
            duenio,
            mascota,
            fecha,
            hora,
            sintomas
        };

        setCitas(prevCitas => [...prevCitas, nuevaCita]);

        setDuenio("");
        setMascota("");
        setFecha("");
        setHora("");
        setSintomas("");

    }
  
    return(
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" value={mascota} onChange={(event) => setMascota(event.target.value)} placeholder="Nombre Mascota"/>
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" value={duenio} placeholder="Nombre dueño de la mascota" onChange={(event) => setDuenio(event.target.value)}/>
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" value={fecha} onChange={(event) => setFecha(event.target.value)}/>
                <label>hora</label>
                <input type="time" name="hora" className="u-full-width" value={hora} onChange={(event) => setHora(event.target.value)}/>
                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width" value={sintomas} onChange={(event) => setSintomas(event.target.value)}></textarea>
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </div>
    );
}

export default Formulario