import React, { useState } from 'react'

const button = () => {
    const [onWait, setOnWait] = useState(false)
    return (
        <button onClick={(e) => { e.preventDefault(); setOnWait(!onWait) }}></button>
    )
}

export default button