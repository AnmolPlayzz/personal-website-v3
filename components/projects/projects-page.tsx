import styles from "./projects-page.module.css";
import ProjectsHeader from "@/components/projects/projects-header";
import discord from "@/public/projects/pbDiscord.png";
import dash from "@/public/projects/pbDash.png";
import website from "@/public/projects/pbWebsite.png";
import CardBg from "@/components/util/card-bg";
import ToolIcons from "@/components/util/tool-icons";
import ProjectDisplayCard from "@/components/projects/project-display-card";
import gitBg from "@/public/projects/ctaBg.png";
import git from "@/public/icons/github.svg";
import Image from "next/image";

export default function ProjectsPage() {
    const projectList: {
        name: string;
        description?: string;
        tools: string[]
        image: string
    }[] = [
        {
            name: "Personal Site v2",
            image: "pv2",
            tools: ["js","html","css"]
        },
        {
            name: "Anonymous Poster",
            image: "anon",
            tools: ["ts", "njs", "postgresql"]
        },
        {
            name: "Resources",
            image: "res",
            tools: ["ts", "njs", "mdx"]
        },
        {
            name: "GenAI",
            image: "genai",
            tools: ["ts", "njs", "mongo"]
        },
        {
            name: "WebSS API",
            image: "wapi",
            tools: ["ts", "express"]
        }
    ]


    return <div className={styles.projectsPage}>
        <div className={styles.head}>
            <div className={styles.blur}>
                <ProjectsHeader/>
            </div>
            <ProjectsHeader/>
        </div>
        <div className={styles.featured}>
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
                    </div>
                </div>
                <div className={styles.right2}>
                    <CardBg src={website} alt={"Website PolyBot"}/>
                    <div className={styles.info}>
                        <h1 className={styles.h1}>
                            PolyBot Website
                        </h1>
                        <ToolIcons list={["react"]}/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.projectList}>
            {projectList.map((item, index) => {
                return (
                    <ProjectDisplayCard name={item.name} image={item.image} tools={item.tools} />
                )
            })}
            <a className={styles.githubCta} href="https://github.com/AnmolPlayzz?tab=repositories" target={"_blank"}>
                <CardBg src={gitBg} alt={"Github Cta"} />
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