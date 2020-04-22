import React from 'react'
import Header from './app/shared/header/component/Header'
import General from './app/shared/general/General'
import Contact from './app/shared/contact/Contact'
import Footer from './app/shared/footer/Footer'
import MainApp from './app/MainApp'
import ScrollToTop from './app/shared/ScrollToTop'
import {Container, Navbar} from 'react-bootstrap'

function App() {
    return (
        <div className="App wrapper">
            <ScrollToTop/>
            <Header/>
            <MainApp/>
            <General/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App
