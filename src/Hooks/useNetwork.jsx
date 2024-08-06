import React, { useEffect } from 'react'
import { useState } from 'react';

export default function useNetwork() {
    let [isOnline, setIsOnline] = useState(true)
    useEffect(() => {
        detacteOnline()
    }, [])

    function detacteOnline() {
        window.addEventListener('online', function () {
            setIsOnline(true)
        })
        window.addEventListener('offline', function () {
            setIsOnline(false)
        })
    }


    return (
        < >
            {!isOnline ? <div className="network">you are Offline</div> :''}
        </>

    )
}
