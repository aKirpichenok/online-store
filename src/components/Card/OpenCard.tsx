import { useSearch } from '../../hooks/searchHook';
import React from 'react';


export const OpenCard = ({ id, close }) => {
    const { state:card, isLoading, error, succes } = useSearch(`https://fakestoreapi.com/products/${id}`)
    return (
        <div>
            <button onClick={close}>CLOSE</button>
        </div>
    )
}

