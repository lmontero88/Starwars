import React, { useEffect, useState } from 'react'
import Imagen from '../Imagenes/Imagen 1.png'
import { useAppContext } from '../Context/AppContext'
import { withRouter } from 'react-router-dom';



function Personajes(props) {

    const [name, setname] = useState([])
    const [url, setUrl] = useState('http://swapi.dev/api/people?page=1')
    const [nextUrl, setNextUrl] = useState('')
    const [previousUrl, setPreviousUrl] = useState('')
    

    const { personajesFav,  setPersonajesFav } = useAppContext();
   

    const nextPage = () => {
        setUrl(nextUrl);
    }
    
    const previousPage = () => {
        setUrl(previousUrl);
    }

    const person = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setname(data.results);
            setNextUrl(data.next)
            setPreviousUrl(data.previous)
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        person();
    }, [url]);

    const handleFavClick = (pos) => {
        setPersonajesFav([...personajesFav, name[pos]]);
    }

    const goToPersonaje = (url) => {
        const arr = url.split('/');
        const id = parseInt(arr[arr.length-2])
        props.history.push(`${id}`);
    } 

    const construirUrlImage = (url) => {
        const arr = url.split('/');
        const id = parseInt(arr[arr.length-2])

        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    }


    return (
        <>
        <button onClick={previousPage} disabled={previousUrl === null}>Back</button>
        <button onClick={nextPage} disabled={nextUrl === null}>Next</button>
        <div className='row' >
            <div className='col-md-12 d-flex flex-row justify-content-around flex-wrap mt-5'>
                {
                    name.map((item, i) => {
                        
                        return <div key={i} className="card col-md-5 m-3" style={{ width: '18rem' }}>
                            <img src={construirUrlImage(item.url)} className="card-img-top mt-3" alt="imagen de prueba" onError={(e)=>{e.target.onerror = null; e.target.src=Imagen}}></img>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <button className="btn btn-primary" onClick={() => goToPersonaje(item.url)} >Go somewhere</button>
                                <button onClick={() => handleFavClick(i)}><i className="far fa-heart"></i></button>
                            </div>
                        </div>
                    })

                }



            </div>
        </div>
        </>
    )
}

export default withRouter(Personajes)
