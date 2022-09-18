import { About, Home, Login, Catalog, Basket, CatalogMain } from "../pages"
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./Layout/Layout"
import { SignUp } from "./Sign/signUp"


const App = () => {
    return (

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="catalog" element={<CatalogMain />}>
                        <Route path=":type" element={<Catalog />}/>
                    </Route>
                    <Route path="about" element={<About />} />
                    <Route path="basket" element={<Basket />} />
                    <Route path="signIn" element={<Login />} />
                    <Route path="signUp" element={<SignUp />} />
                </Route>
            </Routes>

        
    )
}

export default App