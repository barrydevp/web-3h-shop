import createAPIServices from './createApiServices'
import {DEFAULT_API} from '../../store/env'

const baseUrl = process.env.NODE_ENV === 'production' ? `https://${process.env.NODE_PRIMARY_DOMAIN}/users` : `${DEFAULT_API}/users`

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