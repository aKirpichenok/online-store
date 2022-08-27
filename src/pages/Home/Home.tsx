import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import photo from '../../img/main.jpg';
import electronic from '../../img/electronic.jpg';
import jewelery from '../../img/jewelery.jpg';
import mens_clothing from '../../img/mens_clothing.jpg';
import womens_clothing from '../../img/womens_clothing.jpg';
import HomeUI from './HomeUI';

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
                <NavLink to='about' className="home-link__catalog">Подробнее</NavLink>
            </div>
            
            
            <div className="home-block__categories home-categories">
                <HomeUI
                    divName='electronics'
                    title='Электроника'
                    onClick={()=>navigate('login')}
                    imgSRC={electronic}
                />
                <HomeUI
                    divName='jewelery'
                    title='Ювелирные изделия'
                    onClick={()=>navigate('login')}
                    imgSRC={jewelery}
                />
                <HomeUI
                    divName='mens-clothing'
                    title='Мужская одежда'
                    onClick={()=>navigate('login')}
                    imgSRC={mens_clothing}
                />
                <HomeUI
                    divName='womens-clothing'
                    title='Женская одежда'
                    onClick={()=>navigate('login')}
                    imgSRC={womens_clothing}
                />
            </div>
            
        </div>
        
    )
}
