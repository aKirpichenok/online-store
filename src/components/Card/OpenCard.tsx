import { useSearch } from '../../hooks/searchHook';
import React from 'react';


export const OpenCard = ({ id, close, open }) => {
    const { state:card, isLoading, error, succes } = useSearch(`https://fakestoreapi.com/products/${id}`)
    return (
        <div className={`card-container ${open ? 'show' : 'hide'}`}>
            <button className="card-back" onClick={close}></button>
            <div className="card-image _ibg">
                <img src={card.image} alt="card-image" />
            </div>
            <h1 className="card-title">{card.title}</h1>
            <p className="card-body">{card.description}</p>
            <span className="card-price">{card.price}</span>
        </div>
    )
}

