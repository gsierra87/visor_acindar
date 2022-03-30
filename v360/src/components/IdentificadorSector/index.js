import React from 'react';
import './IdentificadorSector.css';
import logo from '../../images/DJI_0060.jpg';

function IdentificadorSector(props) {
  return (
    <div className='circulo'>
        <span>{props.identificador}</span>
    </div>
  );
}

export { IdentificadorSector };
