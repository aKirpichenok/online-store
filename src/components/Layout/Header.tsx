import React,{ useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    
    const [state,setState] = useState('nav-black')
    useEffect (() => {
        window.addEventListener('scroll',function(e) {
            if(window.scrollY>200) {
                setState('')
            }else {
                setState('nav-black')
            }
        })
    },[])


    return (
        <header className={`header ${state}`}>
        <nav className="navbar">
            <div className="logo">
                <NavLink to="/">Online-Store</NavLink>
            </div>
            <ul className="navmenu">
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="catalog">Каталог</NavLink></li>
                <li><NavLink to="about">О нас</NavLink></li>
                <li><NavLink to="basket">Корзина</NavLink></li>
                
            </ul>
            <div>
                <NavLink to="login">Войти</NavLink>
            </div>
        </nav>
        </header>
    )
}

export default Header