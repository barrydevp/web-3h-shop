import React, {useCallback, useState} from 'react'
import CategoryContext from './CategoryContext'

export default function BindCategoryContext(props) {
    const [categoryContext, setCategoryContext] = useState({
        rootCategories: [],
        query: {
            _id: '',
            parent_id: '',
            name: '',
            page: 0,
            limit: 0,
        }
    })

    const dispatch = useCallback((state, merge = true) => {

    }, [])

    return (
        <CategoryContext.Provider value={{
            value: categoryContext, dispatch: setCategoryContext
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}