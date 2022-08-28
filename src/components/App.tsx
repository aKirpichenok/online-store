import { About, Home, Login, Catalog, Basket, CatalogMenu } from "../pages"
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./Layout/Layout"


const App = () => {
    return (

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="catalog" element={<CatalogMenu />}>
                        <Route path=":type" element={<Catalog />}/>
                    </Route>
                    <Route path="about" element={<About />} />
                    <Route path="basket" element={<Basket />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>

        
    )
}

export default App