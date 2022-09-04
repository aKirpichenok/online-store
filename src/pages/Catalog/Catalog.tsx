import { useSearch } from '../../hooks/searchHook';
import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Card } from './Card';

export const Catalog = () => {
    const { type } = useParams()
    const { state, isLoading, error, succes } = useSearch(`https://fakestoreapi.com/products/category/${type}`)
    const [open,setOpen] = useState(false)
    const [id,setId] = useState(0)
    console.log(isLoading)

    const openCard = (id) => {
        setOpen(prev => !prev)
        setId(id)
    }

    if(isLoading) {
        return <h1>Loading...</h1>
    }
    if(open) {
        return <Card 
                id={id} 
                close={openCard}
                />
    }
    return (
        <div >
            {state.map(card => 
                <div key={card.id} style={{padding:'20px', border: '2px solid red'}}>
                    <h2>{card.title}</h2>
                    <p>{card.price}</p>
                    <img src={card.image} alt="image" style={{width:'50px', height:'50px'}} onClick={() => openCard(card.id)}/>
                </div>
            )}
        </div>
    )
}