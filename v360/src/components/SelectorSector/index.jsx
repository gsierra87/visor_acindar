import React from 'react';
import './SelectorSector.css';
import {IdentificadorSector} from '../../components/IdentificadorSector/index.js';
import { DetalleSector } from '../../components/DetalleSector/index.js';
import { ContenedorDetalle } from '../../components/ContenedorDetalle/index.js';


function SelectorSector(props) {

    console.log(props);

    return (
      
      <div className='sector__section'>
        { props.sectores.map(item => (
            <ContenedorDetalle position={item.position} key={item.identificador} identificador={item.identificador} sector={item.sector} descripcion={item.descripcion} />
        ))}    
      </div>
    );
  }
  
  export { SelectorSector };
  
