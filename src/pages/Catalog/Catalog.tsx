import React from 'react';
import { useParams } from 'react-router';

export const Catalog = () => {
    const { type } = useParams()
    console.log('type',type)
    return (
        <div style={{fontSize:'65px'}}>
            Catalog
        </div>
    )
}