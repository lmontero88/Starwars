import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function Navbar() {
    return (
       
       
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <Link className="navbar-brand" to="/">Star Wars</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Personajes/">Personajes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Planetas/">Planetas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Vehiculos/">Vehículos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Favorito">Favorito</Link>
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
            
        
       
    )
}

export default Navbar
