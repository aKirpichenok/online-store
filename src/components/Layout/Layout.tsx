import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export const Layout = () => {
    return (
        <div className="wrapper">

                <Header />


            <main className='content'>
                <Outlet />
            </main>

                <Footer />
        </div>
    )
}