import React from 'react';
import './DetalleSector.css';

function DetalleSector(props) {

    return (
        <div className={`${props.visible ? 'section__detalle--container-visible' : 'section__detalle--container-hidden'}`}>
        <span className='section__detalle--titulo'>
            {props.sector}
        </span>
        <hr className='section__detalle--separador'></hr>
        <p className='section__detalle--detalle'>
            {props.descripcion}
        </p>
    </div>
    );
}


// function DetalleSector(props) {

//     return (
//         <div className='section__detalle--container'>
//             <span className='section__detalle--titulo'>
//                 {props.sector}
//             </span>
//             <hr className='section__detalle--separador'></hr>
//             <p className='section__detalle--detalle'>
//                 {props.descripcion}
//             </p>
//         </div>
//     );
//   }

  export { DetalleSector };
  

