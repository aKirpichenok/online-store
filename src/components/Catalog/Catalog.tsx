import React from 'react';

import { useSearch } from '../../hooks/searchHook';
import { useParams } from 'react-router';
import { Card } from '../Card/Card';
import { Loading } from '../Loading/Loading';

export const Catalog = () => {
    const { type } = useParams()
    const { state, isLoading, error, succes } = useSearch(`https://fakestoreapi.com/products/category/${type}`)

    if(isLoading) {
        return (
        <Loading />
        )
    }
    return (
        <>
            <Card cards={state} />
        </>
    )
}