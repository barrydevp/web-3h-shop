import createAPIServices from './createApiServices'

const baseUrl = 'https://api-3h-shop.herokuapp.com/current'

const api = createAPIServices({baseUrl})

export const getCurrentOrder = () => {
    return api.makeRequest({
        url: `/order`,
        method: 'get',
    })
}
