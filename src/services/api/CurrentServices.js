import createAPIServices from './createApiServices'

// const baseUrl = 'https://api-3h-shop.herokuapp.com/current'

const baseUrl = process.env.NODE_ENV === 'production' ? `https://${process.env.PRIMARY_DOMAIN}/current` : 'http://localhost:4000/current'

const api = createAPIServices({baseUrl})

export const getCurrentOrder = () => {
    return api.makeRequest({
        url: `/order`,
        method: 'get',
    })
}
