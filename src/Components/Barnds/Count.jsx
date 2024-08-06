import React, { useEffect, useState } from 'react'

export default function Count({ getCount }) {
    const [Count, setCount] = useState(1)
    useEffect(() => {
       console.log("Fuck your Self Count");
       setCount(getCount)
    }, [ getCount()])

    return (
        <div className='bg-danger my-5'>
            <h1>Hello form Count Commponent ---- {Count}</h1>
        </div>
    )
}
