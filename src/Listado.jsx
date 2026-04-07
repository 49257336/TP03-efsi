import './Listado.css'
import Cita from './Cita.jsx'

function Listado({citas, setCitas}){

    return(
        <div className="one-half column">
            <h2>Administra tus citas</h2>
            <Cita Mascota="Nina" Dueño="Martin" Fecha="2021-08-05" Hora="08:20" Sintomas="Le duele la pierna"/>
            <Cita Mascota="Sifon" Dueño="Flecha" Fecha="2023-08-05" Hora="09:24" Sintomas="Duerme mucho"/>
            <Cita Mascota="Floki" Dueño="Ari" Fecha="2023-08-05" Hora="16:15" Sintomas="No está comiendo"/>
            </div>
    );
}

export default Listado