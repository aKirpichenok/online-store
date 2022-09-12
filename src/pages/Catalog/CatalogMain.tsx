import React from 'react';
import { Outlet, useParams } from 'react-router';
import { CatalogMenu } from './CatalogMenu';
import { CatalogAll } from './CatalogAll';

export const CatalogMain = () => {
    
    const { type } = useParams()
    return (
        <div className="page__catalog">
            <div className="catalog-block _container">
            <CatalogMenu />
            <div className="catalog__body">
                <Outlet/>
                { !type && <CatalogAll />}
            </div>
            
            </div>
            
        </div>
    )
}
