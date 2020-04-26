import React, {useCallback, useEffect, useState} from 'react'
import GlobalContext from './GlobalContext'

export default function BindGlobalContext(props) {
    const [globalContext, setGlobalContext] = useState({
        globalLoading: 0
    })

    const setGlobalLoading = useCallback((loading) => {
        let unit = 0

        if (loading) {
            unit = 1
        } else {
            unit = -1
        }

        setGlobalContext(prevState => {
            const _loading = prevState.globalLoading + unit

            return {
                ...prevState,
                globalLoading: _loading < 0 ? 0 : _loading
            }
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            globalContext, setGlobalContext, setGlobalLoading
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}