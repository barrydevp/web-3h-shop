import createAPIServices from './createApiServices'
import {DEFAULT_API} from '../../store/env'

// const baseUrl = 'https://api-3h-shop.herokuapp.com/products'
const baseUrl = process.env.NODE_ENV === 'production' ? `https://${process.env.NODE_PRIMARY_DOMAIN}/products` : `${DEFAULT_API}/products`

const api = createAPIServices({baseUrl})

export const getListProduct = (query) => {
    return api.makeRequest({
        url: ``,
        method: 'get',
        params: query,
    })
}

export const getProductById = (productId) => {
    return api.makeRequest({
        url: `/${productId}`,
        method: 'get',
    })
}
