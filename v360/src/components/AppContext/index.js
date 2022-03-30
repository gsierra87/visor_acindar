import React from 'react';

const Context = React.createContext();

const sectores = [
  { sector: 'Base Central', descripcion: "En este sector esta la base de los Super Amigos. Batman es el lider y Aquaman no se sabe que hace.", identificador: 1, position: "sector-1" },
  { sector: 'Sector de Lavado', descripcion: "En este sector se realizan todo tipo de operaciones financieras como en la rosadita. ", identificador: 2, position: "sector-2" },
];

function Provider(props){

    const sectoresAcindar = sectores;

   return (
           <Context.Provider value={{
            sectoresAcindar
           }}>
           {props.children}
           </Context.Provider>
       )
   }
   
   <Context.Consumer></Context.Consumer>
   
   export { Context, Provider }