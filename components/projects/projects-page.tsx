"use client"
import styles from "./projects-page.module.css";
import ProjectsHeader from "@/components/projects/projects-header";
import discord from "@/public/projects/pbDiscord.png";
import dash from "@/public/projects/pbDash.png";
import website from "@/public/projects/pbWebsite.png";
import CardBg from "@/components/util/card-bg";
import ToolIcons from "@/components/util/tool-icons";
import ProjectDisplayCard, {LinkList, Links} from "@/components/projects/project-display-card";
import gitBg from "@/public/projects/ctaBg.png";
import git from "@/public/icons/github.svg";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";

export default function ProjectsPage() {
    const headRef = useRef<HTMLDivElement>(null);
    const featRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const [animation, setAnimation] = useState<boolean>(false);


    const projectList: {
        name: string;
        description?: string;
        tools: string[];
        image: string;
        links: Links
    }[] = [
        {
            name: "Personal Site v2",
            image: "pv2",
            tools: ["js","html","css"],
            links: [
                {
                    name: "Visit",
                    url: "https://anmolcreates-v2.vercel.app/"
                },
                {
                    name: "Source",
                    url: "https://github.com/AnmolPlayzz/personal-website-v2"
                },
            ]
        },
        {
            name: "Anonymous Poster",
            image: "anon",
            tools: ["ts", "njs", "postgresql"],
            links: [
                {
                    name: "Visit",
                    url: "https://nextjs-poster.vercel.app/"
                },
                {
                    name: "Source",
                    url: "https://github.com/AnmolPlayzz/nextjs-poster"
                },
            ]
        },
        {
            name: "Resources",
            image: "res",
            tools: ["ts", "njs", "mdx"],
            links: [
                {
                    name: "Visit",
                    url: "https://resources.anmolcreates.tech/"
                },
                {
                    name: "Source",
                    url: "https://github.com/AnmolPlayzz/resources"
                },
            ]
        },
        {
            name: "GenAI",
            image: "genai",
            tools: ["ts", "njs", "mongo"],
            links: [
                {
                    name: "Source",
                    url: "https://github.com/dev-nihalsharma/genaiexchange"
                },
            ]
        },
        {
            name: "WebSS API",
            image: "wapi",
            tools: ["ts", "express"],
            links: [
                {
                    name: "Source",
                    url: "https://github.com/AnmolPlayzz/webss-api"
                },
            ]
        }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry: any) => {
                    if (entry.isIntersecting) {
                        if (entry.target === headRef.current) {
                            setAnimation(true)
                        }
                        if (entry.target === featRef.current) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'scale(1) translateY(0)';
                        }
                        if (entry.target === listRef.current) {
                            entry.target.style.opacity = '1';
                        }
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -25% 0px',
            }
        );

        if (headRef.current) observer.observe(headRef.current);
        if (featRef.current) observer.observe(featRef.current);
        if (listRef.current) observer.observe(listRef.current);

        return () => observer.disconnect();
    }, []);

    return <div className={styles.projectsPage}>
        <div ref={headRef} className={ animation ? `${styles.head} ${styles.display}` : styles.head }>
            <div className={styles.blur}>
                <ProjectsHeader/>
            </div>
            <ProjectsHeader/>
        </div>
        <div ref={featRef} className={styles.featured}>
            <div className={styles.left}>
                <CardBg src={discord} alt={"Discord PolyBot"} />
                <div className={styles.info}>
                    <h1 className={styles.h1}>
                        PolyBot
                    </h1>
                    <p className={styles.p}>
                        The Discord Bot that doesn’t want your f***ing money
                    </p>
                    <ToolIcons list={["js","djs","mongo"]} />
                    <div style={{
                        marginTop: '16px',
                    }}>
                        <LinkList data={[
                            {
                                name: "Invite",
                                url: "https://discord.com/oauth2/authorize?client_id=1111870769027371094"
                            },
                            {
                                name: "Source",
                                url: "https://github.com/AnmolPlayzz/polybot/"
                            }
                        ]} compact/>
                    </div>

                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.right1}>
                    <CardBg src={dash} alt={"Dashboard PolyBot"}/>
                    <div className={styles.info}>
                        <h1 className={styles.h1}>
                            PolyBot Dashboard
                        </h1>
                        <p className={styles.p}>
                            A dashboard that doesn't suck
                        </p>
                        <ToolIcons list={["ts", "njs", "djs", "mongo", "postgresql"]}/>
                        <div style={{
                            marginTop: '16px',
                        }}>
                            <LinkList data={[
                                {
                                    name: "Visit",
                                    url: "https://dashboard.polybot.anmolcreates.tech"
                                },
                                {
                                    name: "Source",
                                    url: "https://github.com/AnmolPlayzz/polybot-dashboard/"
                                }
                            ]} compact/>
                        </div>
                    </div>
                </div>
                <div className={styles.right2}>
                    <CardBg src={website} alt={"Website PolyBot"}/>
                    <div className={styles.info}>
                        <h1 className={styles.h1}>
                            PolyBot Website
                        </h1>
                        <ToolIcons list={["react"]}/>
                        <div style={{
                            marginTop: '16px',
                        }}>
                            <LinkList data={[
                                {
                                    name: "Visit",
                                    url: "https://polybot.anmolcreates.tech"
                                },
                                {
                                    name: "Source",
                                    url: "https://github.com/AnmolPlayzz/polybot-website/"
                                }
                            ]} compact/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref={listRef} className={styles.projectList}>
            {projectList.map((item, index) => {
                return (
                    <ProjectDisplayCard name={item.name} image={item.image} tools={item.tools} key={index}
                                        links={item.links}/>
                )
            })}
            <a className={styles.githubCta} href="https://github.com/AnmolPlayzz?tab=repositories" target={"_blank"}>
                <CardBg src={gitBg} alt={"Github Cta"}/>
                <div className={styles.gitIcon}>
                    <Image style={{
                        filter: "invert(1)",
                        objectFit: "contain",
                        objectPosition: "center",
                    }} src={git} alt={"Github Cta"} fill={true} />
                </div>
                <div className={styles.text}>
                    View all my Projects on GitHub
                    <Image style={{
                        marginLeft: "10px",
                    }} src={"/icons/arrow.svg"} alt={"ARROW"} width={20} height={20} />
                </div>
            </a>
        </div>
    </div>
}