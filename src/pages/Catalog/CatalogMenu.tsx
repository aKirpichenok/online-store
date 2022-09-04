import { useSearch } from '../../hooks/searchHook'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CatalogMenu = () => {
const { state, succes, error, isLoading } = useSearch('https://fakestoreapi.com/products/categories')
const navigate = useNavigate()

    return <div>
        {state.map((category,index) => <div key={index} onClick={() => navigate(`${category}`)}>{category}</div>)}
    </div>
}