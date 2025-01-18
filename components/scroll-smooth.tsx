'use client'
import { useEffect, useRef } from 'react'
import dynamic from "next/dynamic";

import LocomotiveScroll from 'locomotive-scroll';

import 'locomotive-scroll/dist/locomotive-scroll.css'


export default function SmoothScroll({ children }: {
    children: React.ReactNode
}) {
    const scrollRef = useRef(null)

    useEffect(() => {
        let scroll: any;

        if (scrollRef.current) {
            scroll = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                multiplier: 1.4, // Adjust scrolling speed (lower = slower)
                lerp: 0.06,    // Adjust smoothness (lower = smoother)
            })
        }


        // Update scroll on page content change
        scroll.update()

        // Clean up
        return () => {
            if (scroll) scroll.destroy()
        }
    }, [])

    return (
        <main ref={scrollRef} data-scroll-container>
            {children}
        </main>
    )
}