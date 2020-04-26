import React, {useCallback, useContext, useEffect, useState} from 'react'
import CurrentContext from './CurrentContext'
import {getCurrentOrder} from '../../../services/api/CurrentServices'
import GlobalContext from '../global/GlobalContext'

export default function BindCurrentContext(props) {
    const {setGlobalLoading} = useContext(GlobalContext)
    const [currentContext, setCurrentContext] = useState({
        order: {},
        session: '',
        orderId: '',
        total_item: 0,
    })

    const fetchCurrentOrder = useCallback(async () => {
        setGlobalLoading(true)

        try {
            const {data, success, message} = await getCurrentOrder()
            if (!success) {
                throw new Error(message)
            }

            if (!data) {
                throw new Error('current orders is null :<')
            }

            setCurrentContext({
                ...data,
                orderId: data.order._id,
            })

        } catch (error) {
            alert(error.message || 'error')
        }

        setGlobalLoading(false)
    }, [])

    useEffect(() => {
        fetchCurrentOrder()
    }, [])

    return (
        <CurrentContext.Provider value={{
            currentContext, setCurrentContext, fetchCurrentOrder
        }}>
            {props.children}
        </CurrentContext.Provider>
    )
}