import React from 'react';
import { useSearch } from '../../hooks/searchHook';

export const Card = ({id, close}) => {
    const {state, succes, isLoading, error} = useSearch(`https://fakestoreapi.com/products/${id}`)

    if(isLoading) {
        return <h1>LOADING....</h1>
    }
    return <div style={{color:'red', fontSize:'48px'}}>
        {state.description}
        <button onClick={close}>CLOSE</button>
    </div>
}