"use client"
import styles from "./about-page.module.css";
import AboutHeading from "@/components/about/client/about-heading";
import glow from "@/public/about/aboutbg.svg"
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import NameCard from "@/components/about/grid/gridA/name-card";
import ExpCard from "@/components/about/grid/gridA/exp-card";
import EduCard from "@/components/about/grid/gridA/edu-card";
import SocialsCard from "@/components/about/grid/gridA/socials-card";

export default function AboutPage() {

    const glowRef = useRef<HTMLDivElement>(null);
    const [gridDsp, setGridDsp] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry: any) => {
                    if (entry.isIntersecting) {
                        if (entry.target === glowRef.current) {
                            entry.target.style.opacity = '1';
                            setGridDsp(true)
                        }
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -25% 0px',
            }
        );

        if (glowRef.current) observer.observe(glowRef.current);

        return () => observer.disconnect();
    }, []);

    return <div
        style={{
            height: "100vh",
        }}
        className={styles.aboutPage}>
        <AboutHeading />
        <div className={styles.glow} ref={glowRef}>
            <Image className={styles.glowImage} src={glow} alt={"Glow"} width={900}/>
        </div>
        <div className={styles.aboutContent}>
            <div className={styles.gridContent}>
                <div className={gridDsp ? `${styles.grid1} ${styles.display}` : styles.grid1}>
                    <div className={styles.cardWide}>
                        <NameCard />
                    </div>
                    <div className={styles.cardWide}>
                        <ExpCard />
                    </div>
                    <div className={styles.cardWide}>
                        <EduCard />
                    </div>
                    <div>
                        <SocialsCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
}