import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Componentes/Home";
import Personajes from "./Componentes/Personajes";
import Vehiculos from "./Componentes/Vehiculos";
import Planetas from "./Componentes/Planetas";
import Favorito from "./Componentes/Favorito";
import InfoPers from "./Componentes/InfoPers";
import InfoPlanetas from "./Componentes/InfoPlanetas";
import InfoVeh from "./Componentes/InfoVeh";
import { AppContext } from './Context/AppContext';
import { useState } from "react";


function App() {

  const [personajesFav, setPersonajesFav] = useState([]);
  const [planetaFav, setPlanetaFav] = useState([]);
  const [vehiculoFav, setVehiculoFav] = useState([]);

  return (
    <AppContext.Provider value={
      {
        personajesFav: personajesFav,
        setPersonajesFav: setPersonajesFav,
        planetaFav: planetaFav,
        setPlanetaFav:setPlanetaFav,
        vehiculoFav: vehiculoFav,
        setVehiculoFav: setVehiculoFav,


      }
    }>
      <Router>
        <div className='container-fluid'>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Personajes">
              <Personajes />
            </Route>
            <Route exact path="/Personajes/:id">
              <InfoPers />
            </Route>
            <Route exact path="/Vehiculos">
              <Vehiculos />
            </Route>
            <Route exact path="/Vehiculos/:id">
              <InfoVeh/>
            </Route>
            <Route exact path="/Planetas">
              <Planetas />
            </Route>
            <Route exact path="/Planetas/:id">
              <InfoPlanetas/>
            </Route>
            <Route exact path="/Favorito">
              <Favorito />
            </Route>
            {/* <Route exact path="/InfoPers">
              <InfoPers/>
            </Route> */}

          </Switch>
        </div>
      </Router>
    </AppContext.Provider>

  );
}

export default App;
