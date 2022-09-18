import { useSearch } from '../../hooks/searchHook';
import React from 'react';
import { CardProps, CardsProps, useSearchProps } from './Card';


interface OpenCardProps {
    id: any;
    close: (id:number) => void;
    open: boolean;
}

interface OpenProps {
    state: CardsProps;
    isLoading: boolean;
    error: boolean;
    succes: boolean;
}

export const OpenCard: React.FC<OpenCardProps> = ({ id, close, open }) => {
    const { state, isLoading, error, succes }: OpenProps = useSearch(`https://fakestoreapi.com/products/${id}`)
    return (
        <div className={`card-container ${open ? 'show' : 'hide'}`}>
            <button className="card-back" onClick={() => close(state.id)}></button>
            <div className="card-image _ibg">
                <img src={state.image} alt="card-image" />
            </div>
            <h1 className="card-title">{state.title}</h1>
            <p className="card-body">{state.description}</p>
            <span className="card-price">{state.price}</span>
        </div>
    )
}

