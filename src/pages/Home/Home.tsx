import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import photo from '../../img/main.jpg';
import electronic from '../../img/electronic.jpg';
import jewelery from '../../img/jewelery.jpg';
import mens_clothing from '../../img/mens_clothing.jpg';
import womens_clothing from '../../img/womens_clothing.jpg';

export const Home = () => {
    const navigate = useNavigate()
    fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then(res=>res.json())
            .then(json=>console.log(json))
    return (
        <div className="home-block">
            <div className="main-block__image _ibg">
                <img src={photo} alt=""/>
            </div>
            <div className="home-block__body _container">
                <div className="home-body__title">
                    <h3>
                        4 категории 
                    </h3>
                    <h3>
                        20+ видов товаров 
                    </h3>
                    <h3>
                        Доступные цены 
                    </h3>
                </div>
                <NavLink to='about' className="home-link__catalog">Купить</NavLink>
            </div>
            
            
            <div className="home-block__categories home-categories">
                <div className="home-categories__electronics category" onClick={() => navigate('login')}>
                    <div></div>
                    <img src={electronic} alt="electronic" />
                </div>
                <div className="home-categories__jewelery category" onClick={() => navigate('login')}>
                    <div></div>
                    <img src={jewelery} alt="" />
                </div>
                <div className="home-categories__mens-clothing category" onClick={() => navigate('login')}>
                    <div></div>
                    <img src={mens_clothing} alt="" />
                </div>
                <div className="home-categories__womens-clothing category" onClick={() => navigate('login')}>
                    <div></div>
                    <img src={womens_clothing} alt="" />
                </div>
            </div>
            
        </div>
        
    )
}
