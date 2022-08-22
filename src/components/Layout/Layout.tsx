import React,{useState,useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export const Layout = () => {

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
        <div className="wrapper">

            <header className={`header ${state}`}>
                <Header />
            </header>

            <main className='content'>
                <Outlet />
            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}