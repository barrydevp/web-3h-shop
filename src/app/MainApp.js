import React, {useContext} from 'react'
import Home from './home/component/Home'
import Login from './login/component/Login'
import Shop from './shop/component/Shop'
import ProductDetail from './product-detail/component/ProductDetail'
import CheckOut from './checkout/component/CheckOut'
import {Redirect, Route, Switch} from 'react-router-dom'
import Cart from './cart/component/Cart'
import AuthenticateContext from './context/authenticate/AuthenticateContext'
import Logout from './logout/component/Logout'
import Register from './register/component/Register'

function MainApp() {
    const {authenticateContext} = useContext(AuthenticateContext)
    const {isAuthenticated} = authenticateContext

    return (
        <Switch>
            <Route path={'/'} exact component={Home} />
            {!isAuthenticated && <Route path={'/login'} exact component={Login} />}
            {!isAuthenticated && <Route path={'/register'} exact component={Register} />}
            {isAuthenticated && <Route path={'/logout'} exact component={Logout} />}
            <Route path={'/shop'} exact component={Shop} />
            <Route path={'/products/:productId'} exact component={ProductDetail} />
            <Route path={'/cart'} exact component={Cart} />
            <Route path={'/checkout'} exact component={CheckOut} />
            <Route path={'*'}>
                <Redirect to={'/'} />
            </Route>
        </Switch>
    )
}

MainApp.propTypes = {}

export default MainApp
