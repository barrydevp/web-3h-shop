import React from 'react'
import Home from './home/component/Home'
import Shop from './shop/component/Shop'
import ProductDetail from './product-detail/component/ProductDetail'
import CheckOut from './checkout/component/CheckOut'
import {Redirect, Route, Switch} from 'react-router-dom'
import Cart from './cart/component/Cart'

function MainApp() {

    return (
        <Switch>
            <Route path={'/'} exact component={Home} />
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
