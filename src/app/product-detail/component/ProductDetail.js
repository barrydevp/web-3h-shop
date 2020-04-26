import React, {useCallback, useEffect, useState} from 'react'
import Detail from './Detail'
import {useParams} from 'react-router-dom'
import {getProductById} from '../../../services/api/ProductServices'

function ProductDetail() {
    const {productId} = useParams()

    const [product, setProduct] = useState({})

    const fetchProduct = useCallback(async () => {
        try {
            const {data, success, message} = await getProductById(productId)
            if (!success) {
                throw new Error(message)
            }

            setProduct({...data})

        } catch (error) {
            alert(error.message || 'error')
        }
    }, [productId])

    useEffect(() => {
        fetchProduct()
    }, [productId])

    return (
        <div className="ProductDetail mt-5">
            <div className="rowtop">
                <h1>{product.name}</h1>
            </div>
            <Detail product={product}/>
            {/*<RelateProduct/>*/}
        </div>
    )
}

ProductDetail.propTypes = {}

export default ProductDetail
