'use client'
import { useEffect, useState } from 'react'

export default function useHash() {
    const [hash, setHash] = useState('')

    useEffect(() => {
        setHash(window.location.hash)

        const handleHash = () => setHash(window.location.hash)
        window.addEventListener('hashchange', handleHash)
        return () => window.removeEventListener('hashchange', handleHash)
    }, [])

    return hash.slice(1)
}