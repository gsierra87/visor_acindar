import React from 'react';
import { MapaPlanta } from '../components/MapaPlanta/index.js';
import { Pano } from '../components/Panolens/index.jsx';
import {NavBar} from '../components/NavBar/index.js';
import {IdentificadorSector} from '../components/IdentificadorSector/index.js';
import { SelectorSector } from '../components/SelectorSector/index.jsx';
import { InfoModal } from '../components/PanolensModal/index.js';
import { Context } from '../components/AppContext/index.js';


function AppUI(){

  const { sectoresAcindar } = React.useContext(Context);

    return (
        <React.Fragment>
          <NavBar />
          <MapaPlanta sectores={sectoresAcindar}/>
          {/* <IdentificadorSector /> */}
          {/* <SelectorSector sectores={sectoresAcindar} /> */}
          <Pano />
          {/* <InfoModal/> */}
        </React.Fragment>
    );
}

export { AppUI }