import createAPIServices from './createApiServices'

const baseUrl = 'https://api-3h-shop.herokuapp.com/auth/current'

const api = createAPIServices({baseUrl})

export const getCurrentOrderAuth = () => {
    return api.makeAuthRequest({
        url: `/order`,
        method: 'get',
    })
}
