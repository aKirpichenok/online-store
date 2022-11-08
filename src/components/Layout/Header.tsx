import React,{ useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { logout } from '../../store/reducers/userReducer';



const Header = () => {
    const location = useLocation()
    const fromPage = location.pathname || '/'

    const dispatch = useAppDispatch()
    const {isLogged} = useAppSelector(state=> state.user)
    const {amount} = useAppSelector(state => state.basket)
    
    const [state,setState] = useState('nav-black')
    useEffect (() => {
        window.addEventListener('scroll',function(e) {
            if(window.scrollY>100) {
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
                <li>{amount ? <span className='amountBakset'>{amount}</span> : ''}<NavLink to="basket"> Корзина</NavLink></li>
                
            </ul>
            <div>
                {!isLogged ? 
                <NavLink to="signIn" state={{fromPage:fromPage}}>Войти</NavLink> :
                <button onClick={() => dispatch(logout())}>Выйти</button>
                }
            </div>
        </nav>
        </header>
    )
}

export default Header