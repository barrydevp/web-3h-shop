import createAPIServices from './createApiServices'

const baseUrl = 'https://api-3h-shop.herokuapp.com/products'

const api = createAPIServices({baseUrl})

export const getListProduct = (query) => {
    return api.makeRequest({
        url: ``,
        method: 'get',
        params: query,
    })
}
