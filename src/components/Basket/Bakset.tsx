import React,{useState} from 'react';

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