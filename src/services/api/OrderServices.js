import createAPIServices from './createApiServices'

const baseUrl = 'https://api-3h-shop.herokuapp.com/orders'

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

export const insertOrderItem = (orderId, item) => {
    return api.makeRequest({
        url: `/${orderId}/items`,
        method: 'post',
        data: item,
    })
}
