import createAPIServices from './createApiServices'

const baseUrl = process.env.NODE_ENV === 'production' ? `https://${process.env.PRIMARY_DOMAIN}/users` : 'http://localhost:4000/users'

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