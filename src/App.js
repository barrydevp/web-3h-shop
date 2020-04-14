import React from 'react'
import Home from './app/home/component/Home'
import Header from './app/shared/header/component/Header'
import General from './app/shared/general/General'
import Contact from './app/shared/contact/Contact'
import Footer from './app/shared/footer/Footer'

function App() {
    return (
        <div className="App wrapper">
            <Header/>
            <Home/>
            <General/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App
