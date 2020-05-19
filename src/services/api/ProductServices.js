import createAPIServices from './createApiServices'

// const baseUrl = 'https://api-3h-shop.herokuapp.com/products'
const baseUrl = process.env.NODE_ENV === 'production' ? `https://${process.env.PRIMARY_DOMAIN}/products` : 'http://localhost:4000/products'

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
