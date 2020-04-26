import React, {useContext, useEffect, useState} from 'react'
import CategoryContext from './CategoryContext'
import {getRootCategory} from '../../../services/api/CategoryServices'
import GlobalContext from '../global/GlobalContext'

export default function BindCategoryContext(props) {
    const {setGlobalLoading} = useContext(GlobalContext)
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
            setGlobalLoading(true)

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

            setGlobalLoading(false)
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