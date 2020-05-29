import createAPIServices from './createApiServices'
import {DEFAULT_API} from '../../store/env'

// const baseUrl = 'https://api-3h-shop.herokuapp.com/current'

const baseUrl = process.env.NODE_ENV === 'production' ? `https://${process.env.REACT_APP_PRIMARY_DOMAIN}/current` : `${DEFAULT_API}/current`

const api = createAPIServices({baseUrl})

export const getCurrentOrder = () => {
    return api.makeRequest({
        url: `/order`,
        method: 'get',
    })
}
