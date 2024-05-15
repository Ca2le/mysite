import React, { useEffect } from 'react'

function LoadingScreen() {
    const [loadedOnce, setLoadedOnce] = React.useState(false)
    useEffect(() => {
        (async () => {
            if (loadedOnce) return
            cacheBubbleTexture()
            setLoadedOnce(true)
        })()
    }, [loadedOnce])
    return (
        <div>LoadingScreen</div>
    )
}

export default LoadingScreen

function cacheBubbleTexture() {
    throw new Error('Function not implemented.')
}
