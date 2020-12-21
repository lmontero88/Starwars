import React, { useState, useEffect } from 'react'
import { useParams, withRouter } from 'react-router-dom';
import Imagen from '../Imagenes/Imagen 1.png'


function InfoVeh(props) {

    const { id } = useParams(); // obtiene todos los parametros que hay en la url
    const [vehiculo, setVehiculo] = useState({});

    const url = `http://swapi.dev/api/vehicles/${id}/`;

    const getPerson = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setVehiculo(data);
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getPerson();
    }, []);

    const EnviarAtras = ()=>{
        props.history.goBack()
    }

    return (
        <div className='row d-flex justify-content-center mt-5'>
            <div className='col-md-8  d-flex flex-md-grow justify-content-start'>
                <div className="card col-md-6" style={{ width: '18rem' }}>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="card-img-top mt-3" alt="imagen de prueba" onError={(e)=>{e.target.onerror = null; e.target.src=Imagen}}></img>
                </div>
                <div className="card col-md-6 ml-3" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title"><b>Vehicle {vehiculo.name}</b></h5>
                        <p className="card-text"><u>Model:</u> {vehiculo.model}</p>
                        <p className="card-text"> <u>Manufacturer:</u> {vehiculo.manufacturer}</p>
                        <p className="card-text"><u>Length:</u> {vehiculo.length}</p>
                        <p className="card-text"><u>Crew:</u> {vehiculo.crew}</p>
                        <p className="card-text"><u>Passengers:</u> {vehiculo.passengers}</p>
                        <p className="card-text"><u>Consumables:</u> {vehiculo.consumables}</p>
                        <p className="card-text"><u>Vehicle Class:</u> {vehiculo.vehicle_class}</p>
                        <button className="btn btn-primary" onClick={EnviarAtras}>Go somewhere</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default withRouter(InfoVeh)
