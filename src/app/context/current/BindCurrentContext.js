import React, {useCallback, useContext, useEffect, useState} from 'react'
import CurrentContext from './CurrentContext'
import {getCurrentOrder} from '../../../services/api/CurrentServices'
import GlobalContext from '../global/GlobalContext'
import AuthenticateContext from '../authenticate/AuthenticateContext'
import {getCurrentOrderAuth} from '../../../services/api/CurrentAuthServices'

export default function BindCurrentContext(props) {
    const {authenticateContext} = useContext(AuthenticateContext)
    const {isAuthenticated} = authenticateContext
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
            const {data, success, message} = isAuthenticated ? await getCurrentOrderAuth() : await getCurrentOrder()
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
    }, [isAuthenticated])

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