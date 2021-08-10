import React from "react";
import { Clima } from "./Clima";
import { Error } from "./Error";
import { Formulario } from "./Formulario";
import PropTypes from 'prop-types';

export const Contenedor = ({ busqueda, guardarBusqueda, guardarConsultar, resultado }) => {
  let componente;
  if(resultado.cod === '404'){
    componente = <Error 
    
                    mensaje='No se encontraron coincidencias'
                 />
  }else{
    componente =  <Clima
                    resultado={resultado}
                  />
  }
  return (
    <div className="contenedor-form">
      <div className="container">
        <div className="row">
          <div className="col m6 s12">
              <Formulario 
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={ guardarConsultar }
              />
          </div>
          <div className="col m6 s12">
           {componente}
          </div>
        </div>
      </div>
    </div>
  );
}
Contenedor.propTypes = {
  busqueda: PropTypes.object.isRequired,
  guardarBusqueda : PropTypes.func.isRequired,
  guardarConsultar: PropTypes.func.isRequired,
  resultado: PropTypes.func.isRequired
}
