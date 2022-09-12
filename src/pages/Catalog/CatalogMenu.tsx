import { useSearch } from '../../hooks/searchHook'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LoadingMenu } from '../../components/Loading/LoadingMenu'

export const CatalogMenu = () => {
const { state, succes, error, isLoading } = useSearch('https://fakestoreapi.com/products/categories')
const navigate = useNavigate()

    if(isLoading) {
        return <LoadingMenu />
    }
    return <div className="catalog-menu">
        {state.map((category,index) => 
            <div key={index} 
                 onClick={() => navigate(`${category}`)}
                 className="menu-item"
                >
                {category}
            </div>
            )}
    </div>
}