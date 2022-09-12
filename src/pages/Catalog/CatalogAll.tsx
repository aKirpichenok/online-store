import { Card } from '../../components/Card/Card';
import React from 'react';
import { useSearch } from '../../hooks/searchHook';
import { Loading } from '../../components/Loading/Loading';


export const CatalogAll = () => {
    const { state, isLoading, error, succes } = useSearch(`https://fakestoreapi.com/products`)

    if(isLoading) {
        return <Loading />
    }
    return <Card cards={state} />
}