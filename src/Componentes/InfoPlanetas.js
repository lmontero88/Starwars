import React, { useState, useEffect } from 'react'
import { useParams, withRouter } from 'react-router-dom';
import Imagen from '../Imagenes/Imagen 1.png'

function InfoPlanetas(props) {

    const { id } = useParams(); // obtiene todos los parametros que hay en la url
    const [planeta, setplaneta] = useState({});

    const url = `http://swapi.dev/api/planets/${id}/`;

    const getPlaneta = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setplaneta(data);
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getPlaneta();
    }, [url]);

    const EnviarAtras = () => {
        props.history.goBack()
    }


    return (
        <div className='row d-flex justify-content-center mt-5'>
            <div className='col-md-8  d-flex flex-md-grow justify-content-start'>
                <div className="card col-md-6" style={{ width: '18rem' }}>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top mt-3" alt="imagen de prueba" onError={(e)=>{e.target.onerror = null; e.target.src=Imagen}}></img>
                </div>
                <div className="card col-md-6 ml-3" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title"><b>Planet {planeta.name}</b></h5>
                        <p className="card-text"><u>Rotation Period:</u> {planeta.rotation_period}</p>
                        <p className="card-text"> <u>Orbital Period:</u> {planeta.orbital_period}</p>
                        <p className="card-text"><u>Diameter:</u> {planeta.diameter}</p>
                        <p className="card-text"><u>Climate:</u> {planeta.climate}</p>
                        <p className="card-text"><u>Gravity:</u> {planeta.gravity}</p>
                        <p className="card-text"><u>Terrain:</u> {planeta.terrain}</p>
                        <p className="card-text"><u>Population:</u> {planeta.population}</p>
                        <button className="btn btn-primary" onClick={EnviarAtras}>>Go somewhere</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default withRouter(InfoPlanetas)
