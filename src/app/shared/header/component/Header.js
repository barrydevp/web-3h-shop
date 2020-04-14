import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMiddle from './HeaderMiddle'
import HeaderBottom from './HeaderBottom'

function Header() {
    return (
        <header className="Header header-area">
            <HeaderTop/>
            <HeaderMiddle/>
            <HeaderBottom/>
        </header>
    )
}

export default Header
