import React from 'react';
import './ContenedorDetalle.css';
import {IdentificadorSector} from '../../components/IdentificadorSector/index.js';
import { DetalleSector } from '../../components/DetalleSector/index.js';

import { Modal } from 'bootstrap'

class ContenedorDetalle extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            detailIsVisible: false, 
        };
    }

    setDetailIsVisibleState(visible) {
        this.setState({
            detailIsVisible: visible,
        });
      }

      OpenModal(){
        var myModal = new Modal(document.getElementById('exampleModal'))
        myModal.show();

        console.log(myModal);
      }

    render(){
    return (
        <div  className={`sector__section--div ${this.props.position}`} 
            onMouseEnter={() => this.setDetailIsVisibleState(true)}
            onMouseLeave={() => this.setDetailIsVisibleState(false)}
            onClick={() => this.OpenModal()}
            
             >
            <IdentificadorSector   identificador={this.props.identificador} />
             {/* {this.state.detailIsVisible && ( */}
                <DetalleSector visible={this.state.detailIsVisible} sector={this.props.sector} descripcion={this.props.descripcion} />
             {/* )} */}
        </div>
    );
  }
}

export { ContenedorDetalle };
  