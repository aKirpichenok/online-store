import React from 'react';
import { Loading } from './Loading';
import { LoadingMenu } from './LoadingMenu';

export const CatalogMainLoad = () => {
    return (
        <div className="catalog-block">
            <div>
                <LoadingMenu />
            </div>
            <div>
                <Loading/>
            </div>
        </div>
    )
}