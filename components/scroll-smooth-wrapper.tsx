"use client";

import dynamic from "next/dynamic";

const SmoothScroll: any = dynamic(
    (): any => import('@/components/scroll-smooth'),
    { ssr: false }
)

export default function ScrollSmoothWrapper({children}: {
    children: React.ReactNode
}) {
    return <SmoothScroll>
        {children}
    </SmoothScroll>
}