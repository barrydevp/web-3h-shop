import React, {useCallback, useContext, useEffect, useState} from 'react'
import SideBar from './SideBar'
import Product from './Product'
import CategoryContext from '../../context/category/CategoryContext'
import ProductContext from '../../context/product/ProductContext'
import {useLocation} from 'react-router-dom'
import queryString from 'query-string'
import {getListProduct} from '../../../services/api/ProductServices'
import {getCategoryTreeById} from '../../../services/api/CategoryServices'

function Shop() {
    const {categoryContext, setCategoryContext} = useContext(CategoryContext)
    const {productContext, setProductContext} = useContext(ProductContext)
    const {rootCategories, categories} = categoryContext
    const {products} = productContext
    const location = useLocation()
    const [query, setQuery] = useState({
        limit: 16,
        page: 1,
        ...queryString.parse(location.search)
    })

    const fetchProduct = useCallback(async (query) => {
        try {
            const {data, success, message} = await getListProduct({
                page: 1,
                ...query,
                limit: 16,
            })
            if (!success) {
                throw new Error(message)
            }

            setProductContext((state) => {
                return {
                    ...state,
                    products: data,
                }
            })

        } catch (error) {
            alert(error.message || 'error')
        }
    }, [])

    const fetchSubCategory = useCallback(async () => {
        try {
            const {data, success, message} = await getCategoryTreeById(query.category_parent_id)
            if (!success) {
                throw new Error(message)
            }

            setCategoryContext((state) => {
                return {
                    ...state,
                    categories: data && data.children || [],
                }
            })

        } catch (error) {
            alert(error.message || 'error')
        }
    }, [query.category_parent_id])

    useEffect(() => {
        const _query = {
            page: 1,
            ...queryString.parse(location.search),
            limit: 16,
        }

        setQuery(_query)

        fetchProduct(_query)
    }, [location.search])

    useEffect(() => {
        if(parseInt(query.category_parent_id) > 0) fetchSubCategory()
        else {
            setCategoryContext((state) => {
                return {
                    ...state,
                    categories: [],
                }
            })
        }
    }, [query.category_parent_id])

    return (
        <div className="shop-area">
            <div className="container-fluid">
                <div className="row">
                    <SideBar rootCategories={rootCategories} productQuery={query}/>
                    <Product productQuery={query} products={products} categories={categories}/>
                </div>
            </div>
        </div>
    )
}

Shop.propTypes = {}

export default Shop
