import React from 'react';
import { Outlet, useParams } from 'react-router';
import { CatalogMenu } from './CatalogMenu';

export const CatalogMain = () => {
    const { type } = useParams()
    return (
        <div className="page__catalog">
            <div className="catalog-block _container">
            <CatalogMenu />
            <Outlet/>
            {/* { !type && <div>ALL</div>} */}
            </div>
            
        </div>
    )
}
