import { About, Home, Login } from "../pages"
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./Layout/Layout"
import { Basket } from "./Basket/Bakset"


const App = () => {
    return (

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="basket" element={<Basket />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>

        
    )
}

export default App