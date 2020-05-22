import React, {useEffect} from 'react'
import {logoutUser} from '../../../services/AuthServices'

function Logout() {
    useEffect(() => {
        logoutUser()
    }, [])

    return (
        <div className="Logout">
            bye bye
        </div>
    )
}

Logout.propTypes = {}

export default Logout
