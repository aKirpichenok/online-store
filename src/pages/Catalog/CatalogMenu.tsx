import React from 'react';
import { Outlet, useParams } from 'react-router';

export const CatalogMenu = () => {
    const { type } = useParams()
    return (
        <div>
            Catalog MENU
            <Outlet/>
            { !type && <div>Menu</div>}
        </div>
    )
}
