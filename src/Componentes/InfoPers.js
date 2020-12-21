import React, { useState, useEffect } from 'react'
import { useParams, withRouter } from 'react-router-dom';
import Imagen from '../Imagenes/Imagen 1.png'


function InfoPers(props) {

    const { id } = useParams(); // obtiene todos los parametros que hay en la url
    const [personaje, setPersonaje] = useState({});

    const url = `http://swapi.dev/api/people/${id}/`;

    const getPerson = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setPersonaje(data);
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
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top mt-3" alt="imagen de prueba" onError={(e)=>{e.target.onerror = null; e.target.src=Imagen}}></img>
                </div>
                <div className="card col-md-6 ml-3" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title"><b>{personaje.name}</b></h5>
                        <p className="card-text"><u>Eyes Color:</u> {personaje.eye_color}</p>
                        <p className="card-text"> <u>Hair Color:</u> {personaje.hair_color}</p>
                        <p className="card-text"><u>Skin Color:</u> {personaje.skin_color}</p>
                        <p className="card-text"><u>Height:</u> {personaje.height}</p>
                        <p className="card-text"><u>Birth Year:</u> {personaje.birth_year}</p>
                        <p className="card-text"><u>Mass:</u> {personaje.mass}</p>
                        <p className="card-text"><u>Gender:</u> {personaje.gender}</p>
                        <button className="btn btn-primary" onClick={EnviarAtras}>Go somewhere</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default withRouter(InfoPers)
