import React from 'react'
import PropTypes from 'prop-types';

export const Clima = ({resultado}) => {
    const { main, name } = resultado;
    if(!name)
        return null;
        
    const kelvin = 273.15;
    return (
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>El clima de {name} es :</h2>
                <p className='temperatura'>{(main.temp - kelvin).toFixed(2) } <span> &#x2103; </span></p>
                <p>Temperatura Máxima
                    {(main.temp_max - kelvin).toFixed(2) } <span> &#x2103; </span>
                </p>
                <p>Temperatura Minima
                    {(main.temp_min - kelvin).toFixed(2) } <span> &#x2103; </span>
                </p>
            </div>
            
        </div>
    )
}

Clima.propTypes = {
    resultado : PropTypes.object.isRequired
}
