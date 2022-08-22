import React,{useState} from 'react';
import basket from '../../img/basket.svg'; 
import BasketModal from './BasketModal';

export const Basket = () => {
    
    const [open,setOpen] = useState(false)

    return (
        <div className="basket">
            BASKET
            {/* <button onClick={()=> setOpen(prev=>!prev)}><img src={basket} alt="" /></button> 
            {open && <BasketModal />}  */}
        </div>
    )
}