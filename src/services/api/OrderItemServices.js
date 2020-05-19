import createAPIServices from './createApiServices'

// const baseUrl = 'https://api-3h-shop.herokuapp.com/order-items'
const baseUrl = process.env.NODE_ENV === 'production' ? `https://${process.env.PRIMARY_DOMAIN}/order-items` : 'http://localhost:4000/order-items'

const api = createAPIServices({baseUrl})

export const getListOrderItems = (query) => {
    return api.makeRequest({
        url: ``,
        method: 'get',
        params: query,
    })
}

export const deleteOrderItemById = (orderItemId) => {
    return api.makeRequest({
        url: `/${orderItemId}/delete`,
        method: 'post'
    })
}

export const updateOrderItem = (orderItemId, data) => {
    return api.makeRequest({
        url: `/${orderItemId}/update`,
        method: 'post',
        data: data,
    })
}

export const increaseQuantityOrderItem = (orderItemId, data) => {
    return api.makeRequest({
        url: `/${orderItemId}/quantity/increase`,
        method: 'post',
        data: data,
    })
}

export const decreaseQuantityOrderItem = (orderItemId, data) => {
    return api.makeRequest({
        url: `/${orderItemId}/quantity/decrease`,
        method: 'post',
        data: data,
    })
}
