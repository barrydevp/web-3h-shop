import createAPIServices from './createApiServices'

const baseUrl = 'https://api-3h-shop.herokuapp.com/categories'

const api = createAPIServices({baseUrl})

export const getRootCategory = () => {
    return api.makeRequest({
        url: ``,
        method: 'get',
        params: {
            parent_id: 0,
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
