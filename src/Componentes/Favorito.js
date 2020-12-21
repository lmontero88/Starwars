import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useAppContext } from '../Context/AppContext'
import Imagen from '../Imagenes/Imagen 1.png'


function Favorito(props) {

    const { personajesFav, setPersonajesFav, planetaFav, setPlanetaFav, vehiculoFav, setVehiculoFav } = useAppContext();

    const handleEliminarPersonaje = (pos) => {
        let arrayTemp1 = [...personajesFav];
        arrayTemp1.splice(pos, 1);
        setPersonajesFav(arrayTemp1);
    }
    const handleEliminarPlaneta = (pos) => {
        let arrayTemp2 = [...planetaFav];
        arrayTemp2.splice(pos, 1);
        setPlanetaFav(arrayTemp2);
    }
    const handleEliminarVehiculo = (pos) => {
        let arrayTemp3 = [...planetaFav];
        arrayTemp3.splice(pos, 1);
        setVehiculoFav(arrayTemp3);
    }

    const goToDetalle = (url, type) => {
        const arr = url.split('/');
        const id = parseInt(arr[arr.length - 2])
        console.log(type, id)
        props.history.push(`/${type}/${id}`);
    }
    const construirUrlImage = (url, type) => {
        const arr = url.split('/');
        const id = parseInt(arr[arr.length - 2])

        return `https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`
    }

    return (
        <>
            <h1>Favoritos</h1>
            <div className='row' >
                <div className='col-md-12 d-flex flex-row justify-content-around flex-wrap mt-5'>
                    {

                        personajesFav.map((item, i) => {

                            return <div key={`p${i}`} className="card col-md-5 m-3" style={{ width: '18rem' }}>
                                <img src={construirUrlImage(item.url, 'characters')} className="card-img-top mt-3" alt="imagen de prueba" onError={(e) => { e.target.onerror = null; e.target.src = Imagen }}></img>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <button onClick={() => goToDetalle(item.url, "Personajes")} className="btn btn-primary">Go somewhere</button>
                                    <button onClick={() => handleEliminarPersonaje(i)}><i className="far fa-trash-alt"></i></button>
                                </div>
                            </div>
                        })
                    }
                    {
                        planetaFav.map((item, i) => {

                            return <div key={`pt${i}`} className="card col-md-5 m-3" style={{ width: '18rem' }}>
                                <img src={construirUrlImage(item.url, 'planets')} className="card-img-top mt-3" alt="imagen de prueba" onError={(e) => { e.target.onerror = null; e.target.src = Imagen }}></img>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <button onClick={() => goToDetalle(item.url, "Planetas")} className="btn btn-primary">Go somewhere</button>
                                    <button onClick={() => handleEliminarPlaneta(i)}><i className="far fa-trash-alt"></i></button>
                                </div>
                            </div>
                        })
                    }
                    {

                        vehiculoFav.map((item, i) => {

                            return <div key={`v${i}`} className="card col-md-5 m-3" style={{ width: '18rem' }}>
                                <img src={construirUrlImage(item.url, 'vehicles')} className="card-img-top mt-3" alt="imagen de prueba" onError={(e) => { e.target.onerror = null; e.target.src = Imagen }}></img>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <button onClick={() => goToDetalle(item.url, "Vehiculos")} className="btn btn-primary">Go somewhere</button>
                                    <button onClick={() => handleEliminarVehiculo(i)}><i className="far fa-trash-alt"></i></button>
                                </div>
                            </div>
                        })

                    }



                </div>
            </div>
        </>
    )
}

export default withRouter(Favorito)
