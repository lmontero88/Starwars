import React, { useEffect, useState } from 'react'
import Imagen from '../Imagenes/Imagen 1.png'
import { useAppContext } from '../Context/AppContext'
import { withRouter } from 'react-router-dom';


function Planetas(props) {
    const [namePlantet, setnamePlantet] = useState([])
    const [url, setUrl] = useState('http://swapi.dev/api/planets?page=1')
    const [nextUrl, setNextUrl] = useState('')
    const [previousUrl, setPreviousUrl] = useState('')
    
    const nextPage = () => {
        setUrl(nextUrl);
    }
    
    const previousPage = () => {
        setUrl(previousUrl);
    }

    const { planetaFav,  setPlanetaFav } = useAppContext();

    const planetarios = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setnamePlantet(data.results);
            setNextUrl(data.next)
            setPreviousUrl(data.previous)

        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        planetarios();
    }, [url]);

    const handleFavClick = (pos) => {
        console.log(namePlantet[pos])
        setPlanetaFav([...planetaFav, namePlantet[pos]]);
    }
    const goToPlaneta = (url) => {
        const arr = url.split('/');
        const id = parseInt(arr[arr.length-2])
        props.history.push(`${id}`);
    } 
    const construirUrlImage = (url) => {
        const arr = url.split('/');
        const id = parseInt(arr[arr.length-2])

        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    }

    return (
        <div className='row' >
            <div className='col-md-12 d-flex flex-row justify-content-around flex-wrap mt-5'>
                {


                    namePlantet.map((item, i) => {

                        return <div key={i} className="card col-md-5 m-3" style={{ width: '18rem' }}>
                            <img src={construirUrlImage(item.url)} className="card-img-top mt-3" alt="imagen de prueba" onError={(e)=>{e.target.onerror = null; e.target.src=Imagen}}></img>
                            <div className="card-body">
                                <h5 className="card-title">Planet {item.name}</h5>
                                <button onClick={() => goToPlaneta(item.url)} className="btn btn-primary">Go somewhere</button>
                                <button onClick={() => handleFavClick(i)}><i className="far fa-heart"></i></button>
                            </div>
                        </div>
                    })

                }


            </div>
        <button onClick={previousPage} disabled={previousUrl === null}>Back</button>
        <button onClick={nextPage} disabled={nextUrl === null}>Next</button>
        </div>
    )
}

export default withRouter(Planetas)
