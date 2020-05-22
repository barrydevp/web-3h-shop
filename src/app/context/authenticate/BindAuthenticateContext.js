import React, {useCallback, useEffect, useState} from 'react'
import AuthenticateContext from './AuthenticateContext'
import {isAuthenticated, subscribe, subscribeAuth} from '../../../services/AuthServices'

export default function BindAuthenticateContext(props) {
    const [authenticateContext, setAuthenticateContext] = useState({
        isAuthenticated: isAuthenticated()
    })

    const setIsAuthenticated = useCallback((isAuthenticated) => {
        setAuthenticateContext(prevState => {
            return {
                ...prevState,
                isAuthenticated,
            }
        })
    }, [])

    useEffect(() => {
        subscribeAuth()

        subscribe(() => setIsAuthenticated(isAuthenticated()))
    }, [])
    
    return (
        <AuthenticateContext.Provider value={{
            authenticateContext, setAuthenticateContext, setIsAuthenticated
        }}>
            {props.children}
        </AuthenticateContext.Provider>
    )
}