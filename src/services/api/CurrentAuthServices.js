import createAPIServices from './createApiServices'
import {DEFAULT_API} from '../../store/env'

const baseUrl = process.env.NODE_ENV === 'production' ? `https://${process.env.NODE_PRIMARY_DOMAIN}/auth/current` : `${DEFAULT_API}/auth/current`

const api = createAPIServices({baseUrl})

export const getCurrentOrderAuth = () => {
    return api.makeAuthRequest({
        url: `/order`,
        method: 'get',
    })
}
