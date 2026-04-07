import './Cita.css'

function Cita(props){
    return(
        <div className="cita">
              <p>Mascota: <span>{props.Mascota}</span></p>
              <p>Dueño: <span>{props.Dueño}</span></p>
              <p>Fecha: <span>{props.Fecha}</span></p>
              <p>Hora: <span>{props.Hora}</span></p>
              <p>Sintomas: <span>{props.Sintomas}</span></p>
              <button className="button elimnar u-full-width" >Eliminar ×</button>
            </div>
    );
}

export default Cita