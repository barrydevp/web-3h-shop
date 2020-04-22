import React, {useState} from 'react'
import ProductContext from './ProductContext'

export default function BindProductContext(props) {
    const [productContext, setProductContext] = useState({
        products: {
            data: [],
            total: 0,
            page: 0,
            limit: 0,
        },
        query: {
            _id: '',
            category_id: '',
            name: '',
            page: 0,
            limit: 0,
        }
    })

    return (
        <ProductContext.Provider value={{
            value: productContext, dispatch: setProductContext
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}