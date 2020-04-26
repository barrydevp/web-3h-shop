import React from 'react'
import Header from './app/shared/header/component/Header'
import General from './app/shared/general/General'
import Contact from './app/shared/contact/Contact'
import Footer from './app/shared/footer/Footer'
import MainApp from './app/MainApp'
import ScrollToTop from './app/shared/ScrollToTop'
import BindCategoryContext from './app/context/category/BindCategoryContext'
import BindProductContext from './app/context/product/BindProductContext'
import BindCurrentContext from './app/context/current/BindCurrentContext'

function App() {
    return (
        <div className="App wrapper">
            <BindCategoryContext>
                <BindProductContext>
                    <BindCurrentContext>
                        <ScrollToTop/>
                        <Header/>
                        <MainApp/>
                        <General/>
                        <Contact/>
                        <Footer/>
                    </BindCurrentContext>
                </BindProductContext>
            </BindCategoryContext>
        </div>
    )
}

export default App
