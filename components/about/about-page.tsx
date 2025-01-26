"use client"
import styles from "./about-page.module.css";
import AboutHeading from "@/components/about/client/about-heading";
import glow from "@/public/about/aboutbg.svg"
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import NameCard from "@/components/about/grid/grid1/name-card";
import ExpCard from "@/components/about/grid/grid1/exp-card";
import EduCard from "@/components/about/grid/grid1/edu-card";
import SocialsCard from "@/components/about/grid/grid1/socials-card";
import Lang3dCard from "@/components/about/grid/grid2/lang3d-card";
import Next3dCard from "@/components/about/grid/grid2/next3d-card";
import Cc3dCard from "@/components/about/grid/grid2/cc3d-card";
import IdeCard from "@/components/about/grid/grid2/ide-card";
import LanguageCard from "@/components/about/grid/grid2/language-card";
import ProjectCard from "@/components/about/grid/grid3/project-card";
import MailCard from "@/components/about/grid/grid3/mail-card";
import ProjectsCard from "@/components/about/grid/grid3/projects-card";

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
            height: "fit-content",
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
                <div className={styles.flex1}>
                    <div className={gridDsp ? `${styles.grid2} ${styles.display}` : styles.grid2}>
                        <div>
                            <Lang3dCard/>
                        </div>
                        <div>
                            <Next3dCard/>
                        </div>
                        <div>
                            <Cc3dCard/>
                        </div>
                        <div>
                            <IdeCard/>
                        </div>
                        <div>
                            <LanguageCard />
                        </div>
                    </div>
                    <div className={gridDsp ? `${styles.grid3} ${styles.display}` : styles.grid3}>
                        <div className={styles.topSec}>
                            <ProjectCard />
                        </div>
                        <div className={styles.bottomSec}>
                            <MailCard />
                            <ProjectsCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}