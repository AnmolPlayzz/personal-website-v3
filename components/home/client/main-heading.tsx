'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import styles from './main-heading.module.css';

export default function MainHeading() {
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        gsap.set(textRef.current, { opacity: 1 });

        const text = new SplitType(textRef.current, {
            types: 'chars',
            tagName: 'span'
        });

        gsap.set(text.chars, {
            opacity: 0,
            y: 40,
            filter: "blur(12px)"
        });
        requestAnimationFrame(() => {
            gsap.to(text.chars, {
                delay: .5,
                opacity: 1,
                y: 0,
                stagger: 0.02,
                duration: 0.5,
                filter: "blur(0px)",
                ease: 'cubic-bezier(0.87, 0, 0.13, 1)',
            });
        });
    }, []);

    return (
        <h1 ref={textRef} className={styles.mainHeading} >
            I make <span className={styles.bold}>dots</span> on <br/>
            screen <span className={styles.bold}>move</span> in <br/>
            <span className={`${styles.bold} ${styles.underline}`}>interesting</span> ways.
        </h1>
    );
}