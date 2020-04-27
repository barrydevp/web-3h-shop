import React, {useContext} from 'react'
import GlobalContext from '../../context/global/GlobalContext'

function GlobalLoading() {
    const {globalContext} = useContext(GlobalContext)
    const {globalLoading} = globalContext

    return (
        <div className={`GlobalLoading loading-container ${!globalLoading ? 'd-none' : ''}`}>
            <div className="loading">
                <img src="/images/loader.gif" alt="Loading"></img>
            </div>
        </div>
    )
}

GlobalLoading.propTypes = {}

export default GlobalLoading
