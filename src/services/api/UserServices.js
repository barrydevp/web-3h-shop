import createAPIServices from './createApiServices'

const baseUrl = 'https://api-3h-shop.herokuapp.com/users'

const api = createAPIServices({baseUrl})

export const register = (user) => {
    return api.makeRequest({
        url: `/register`,
        method: 'post',
        data: user,
    })
}

export const authenticate = (userLogin) => {
    return api.makeRequest({
        url: `/authenticate`,
        method: 'post',
        data: userLogin,
    })
}