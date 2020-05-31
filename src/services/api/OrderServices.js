import createAPIServices from './createApiServices'
import {DEFAULT_API} from '../../store/env'

// const baseUrl = 'https://api-3h-shop.herokuapp.com/orders'

const baseUrl = process.env.NODE_ENV === 'production' ? `https://${process.env.REACT_APP_PRIMARY_DOMAIN}/orders` : `${DEFAULT_API}/orders`

const api = createAPIServices({baseUrl})

export const getListOrder = (query) => {
    return api.makeRequest({
        url: ``,
        method: 'get',
        params: query,
    })
}

export const getOrderItemByOrderId = (orderId) => {
    return api.makeRequest({
        url: `/${orderId}/items`,
        method: 'get'
    })
}

export const getOrderCoupon = (orderId) => {
    return api.makeRequest({
        url: `/${orderId}/coupon`,
        method: 'get'
    })
}

export const insertOrderItem = (orderId, item) => {
    return api.makeRequest({
        url: `/${orderId}/items`,
        method: 'post',
        data: item,
    })
}

export const checkoutOrder = (orderId, item) => {
    return api.makeRequest({
        url: `/${orderId}/checkout`,
        method: 'post',
        data: item,
    })
}

export const applyCoupon = (orderId, data) => {
    return api.makeRequest({
        url: `/${orderId}/apply/coupon`,
        method: 'post',
        data: data,
    })
}

export const removeCoupon = (orderId) => {
    return api.makeRequest({
        url: `/${orderId}/remove/coupon`,
        method: 'post',
    })
}
