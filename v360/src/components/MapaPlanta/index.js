import React from 'react';
import './MapaPlanta.css';
import logo from '../../images/planta-villa-1.png';
import { SelectorSector } from '../../components/SelectorSector/index.jsx';

function MapaPlanta(props) {
  return (
    <section>
     <img className='imagen__planta' src={logo} alt={"Planta Villa Constitución"} />
     <SelectorSector sectores={props.sectores} />
    </section>
  );
}

export { MapaPlanta };
