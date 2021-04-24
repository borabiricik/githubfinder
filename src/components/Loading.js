import React from 'react'
import loading from "./img/giphy.gif"

export const Loading = () => {
    return (
        <div className="d-flex justify-content-center">
            <img src={loading} alt="loading"/>
        </div>
    )
}
