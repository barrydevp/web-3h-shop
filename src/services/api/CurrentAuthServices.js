import createAPIServices from './createApiServices'

const baseUrl = process.env.NODE_ENV === 'production' ? `https://${process.env.PRIMARY_DOMAIN}/auth/current` : 'http://localhost:4000/auth/current'

const api = createAPIServices({baseUrl})

export const getCurrentOrderAuth = () => {
    return api.makeAuthRequest({
        url: `/order`,
        method: 'get',
    })
}
