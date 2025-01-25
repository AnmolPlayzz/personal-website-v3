"use client"
import { useRef, useEffect } from 'react';
import styles from "./about-heading.module.css";
import animData from "@/public/about/lottie/data.json";
import LottieAnimation from "@/components/util/lottie-animation";
import { LottieRefCurrentProps } from 'lottie-react';

export default function AboutHeading() {
    const lineRef = useRef<HTMLDivElement>(null);
    const borderRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const lottieRef = useRef<LottieRefCurrentProps>(null); // Ref for Lottie animation control

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry: any) => {
                    if (entry.isIntersecting) {
                        if (entry.target === lineRef.current) {
                            entry.target.style.transform = 'scaleX(1)';
                        }
                        if (entry.target === borderRef.current) {
                            entry.target.style.transform = 'scaleY(1)';
                        }
                        if (entry.target === headingRef.current) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0) scale(1)';

                            // Trigger Lottie animation when heading is visible
                            if (lottieRef.current) {
                                lottieRef.current.play();
                            }
                        }
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -25% 0px',
            }
        );

        if (lineRef.current) observer.observe(lineRef.current);
        if (borderRef.current) observer.observe(borderRef.current);
        if (headingRef.current) observer.observe(headingRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.titleContainer}>
            <div ref={borderRef} className={styles.border}>
                <h1
                    ref={headingRef}
                    className={styles.heading}>
                    <LottieAnimation
                        id={"aboutHeading"}
                        ref={lottieRef}
                        autoplay={false}
                        animationData={animData}
                        width={"300px"}
                        height={"100px"}
                    />
                </h1>
            </div>
            <div ref={lineRef} className={styles.line}></div>
        </div>
    );
}