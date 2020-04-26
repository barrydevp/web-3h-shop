import React, {useEffect, useState} from 'react'
import CategoryContext from './CategoryContext'
import {getRootCategory} from '../../../services/api/CategoryServices'

export default function BindCategoryContext(props) {
    const [categoryContext, setCategoryContext] = useState({
        rootCategories: [],
        query: {
            _id: '',
            parent_id: '',
            name: '',
            page: 0,
            limit: 0,
        },
        categories: [],
    })


    useEffect(() => {
        (async () => {
            try {
                const {data, success, message} = await getRootCategory()
                if (!success) {
                    throw new Error(message)
                }

                setCategoryContext((state) => {
                    return {
                        ...state,
                        rootCategories: data.data,
                    }
                })

            } catch (error) {
                alert(error.message || 'error')
            }
        })()

    }, [])

    return (
        <CategoryContext.Provider value={{
            categoryContext, setCategoryContext
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}