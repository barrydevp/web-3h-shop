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
import GlobalLoading from './app/shared/loading/GlobalLoading'
import BindGlobalContext from './app/context/global/BindGlobalContext'
import FixedCart from './app/shared/general/FixedCart'
import BindAuthenticateContext from './app/context/authenticate/BindAuthenticateContext'

function App() {
    return (
        <div className="App wrapper">
            <BindGlobalContext>
                <BindAuthenticateContext>
                    <BindCategoryContext>
                        <BindProductContext>
                            <BindCurrentContext>
                                <ScrollToTop/>
                                <Header/>
                                <MainApp/>
                                <General/>
                                <Contact/>
                                <Footer/>
                                <FixedCart/>
                                <GlobalLoading/>
                            </BindCurrentContext>
                        </BindProductContext>
                    </BindCategoryContext>
                </BindAuthenticateContext>
            </BindGlobalContext>
        </div>
    )
}

export default App
