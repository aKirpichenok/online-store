import { useSearch } from '../../hooks/searchHook';
import React,{useState} from 'react';
import { useAppSelector } from '../../store/hooks/hooks';
import { BasketUI } from '../../components/Basket/BasketUI';
export const Basket = () => {

    const items = useAppSelector(state => state.basket.products)

    const fetchItems = () => {
        const arr = []
        for(let key in items) {
            const { state } = useSearch(`https://fakestoreapi.com/products/${key}`)
            arr.push([state,items[key]])
        }
        return arr
    }

    return (
        <div className="basket">
            {
                <BasketUI 
                products={fetchItems()}
                />
            }
        </div>
    )
}