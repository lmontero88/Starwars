import React, { useContext } from 'react';

export const AppContext = React.createContext(
    {
        personajesFav: [],
        setPersonajesFav: (personaje) => {},
        planetaFav: [],
        setPlanetaFav: (planeta) => {},
        vehiculoFav: [],
        setVehiculoFav: (vehiculo)=> {}
    }
);
export const useAppContext = () => {
    return useContext(AppContext);
}
