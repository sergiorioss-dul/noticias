import React, { useState } from 'react';

const useSelect = (stateInicial,opciones) => {

    //state del custom hoook
    //API 7bcaadc6a9e84106bd3b1f69ca720edc

    const [ state, actualizarState ] = useState(stateInicial);

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={ e => actualizarState(e.target.value)}
        >
            {
                opciones.map(opcion =>(
                <option  key={opcion.value} value={opcion.value}>{opcion.label}</option>
                ))
            }
        </select>
    )

    return [ state,SelectNoticias];

}
 
export default useSelect;