import createAPIServices from './createApiServices'
import {DEFAULT_API} from '../../store/env'

// const baseUrl = 'https://api-3h-shop.herokuapp.com/categories'

const baseUrl = process.env.NODE_ENV === 'production' ? `https://${process.env.REACT_APP_PRIMARY_DOMAIN}/categories` : `${DEFAULT_API}/categories`
const api = createAPIServices({baseUrl})

export const getRootCategory = () => {
    return api.makeRequest({
        url: ``,
        method: 'get',
        params: {
            parent_id: -1,
        }
    })
}

export const getRootCategoryTree = () => {
    return api.makeRequest({
        url: `https://api-3h-shop.herokuapp.com/category-tree/all`,
        method: 'get',
    })
}

export const getCategoryTreeById = (categoryId) => {
    return api.makeRequest({
        url: `/${categoryId}/tree`,
        method: 'get',
    })
}
