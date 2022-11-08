import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import photo from '../../img/photo.jpg';
import electronic from '../../img/electronic.jpg';
import jewelery from '../../img/jewelery.jpg';
import mens_clothing from '../../img/mens_clothing.jpg';
import womens_clothing from '../../img/womens_clothing.jpg';
import HomeUI from './HomeUI';

export const Home = () => {

    const navigate = useNavigate()
    const [state,setState] = useState(false)

    return (
        <div className="home-block">
            <div className="main-block__image _ibg">
                <img src={photo} alt=""/>
            </div>

            <input type="checkbox" id="switch" onClick={()=>setState(!state)}/>
            <div className="line"></div>
            <div className="lamp"></div>

            <div className="home-block__body  _container">

                {/* <div className="home-body__title">
                    <h3 className="home-top">
                        4 категории  
                    </h3>
                    <h3 className='home-middle'>
                        20+ видов товаров 
                    </h3>
                    <h3 className='home-bottom'>
                        Доступные цены 
                    </h3>
                </div>
                <NavLink to='about' className="home-link__catalog">Подробнее</NavLink> */}
            </div>
            
            
            <div className="home-block__categories home-categories">
                <HomeUI
                    divName='electronics'
                    title='Электроника'
                    onClick={()=>navigate('catalog/electronics')}
                    imgSRC={electronic}
                />
                <HomeUI
                    divName='jewelery'
                    title='Ювелирные изделия'
                    onClick={()=>navigate('catalog/jewelery')}
                    imgSRC={jewelery}
                />
                <HomeUI
                    divName='mens-clothing'
                    title='Мужская одежда'
                    onClick={()=>navigate("catalog/men's clothing")}
                    imgSRC={mens_clothing}
                />
                <HomeUI
                    divName='womens-clothing'
                    title='Женская одежда'
                    onClick={()=>navigate("catalog/women's clothing")}
                    imgSRC={womens_clothing}
                />
            </div>
            
        </div>
        
    )
}
