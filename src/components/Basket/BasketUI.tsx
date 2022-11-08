import React from 'react';

export const BasketUI: any = ({products}) => {
    
    console.log(products)

    return (
        <div className="basket">
            {
                products.map(item => {
                   return <div>
                        <b>Название</b> - {item[0].title}<br/>
                        <b>Ценa</b> - {item[0].price}<br/>
                        <b>Описание</b> - {item[0].description}<br/>
                        <b>Категория</b> - {item[0].category}<br/>
                        <b>Количество</b> - {item[1]}
                        <br/><br/><br/>
                        
                    </div>
                })
            }
        </div>
    )
}