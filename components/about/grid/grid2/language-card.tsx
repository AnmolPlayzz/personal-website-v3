import styles from "./language-card.module.css";
import styles2 from "./category.module.css";
import CardBg from "@/components/util/card-bg";
import bg from "@/public/about/grid/languagebg.jpg"
import Image from "next/image";
interface CtTools {
    category: string;
    tools: {
        name: string;
        icon: string;
    }[]
}


export default function LanguageCard() {
    const frameworks: CtTools = {
        category: 'Frameworks',
        tools: [
            {
                name: "NextJS",
                icon: "nextjs"
            },
            {
                name: "ReactJS",
                icon: "react"
            }
        ]
    }
    const db: CtTools = {
        category: "Databases",
        tools: [
            {
                name: "Mongo DB",
                icon: "mongo"
            },
            {
                name: "PostgreSQL",
                icon: "postgresql"
            },
            {
                name: "MySQL",
                icon: "mysql"
            }
        ]
    }

    const lang: CtTools = {
        category: "Languages",
        tools: [
            {
                name: "TypeScript",
                icon: "ts"
            },
            {
                name: "JavaScript",
                icon: "js"
            },
            {
                name: "Python",
                icon: "py"
            },
            {
                name: "CSS",
                icon: "css"
            },
            {
                name: "HTML",
                icon: "html"
            }
        ]
    }

    const cc: CtTools = {
        category: "Creative Apps",
        tools: [
            {
                name: "Premiere Pro",
                icon: "pr"
            },
            {
                name: "After Effects",
                icon: "ae"
            },
            {
                name: "Illustrator",
                icon: "ai"
            },
            {
                name: "Dimension",
                icon: "dn"
            },
            {
                name: "Spline",
                icon: "spline"
            },
        ]
    }

    const icons: string[] = ["nodejs", "npm", "git", "docker", "vercel"]

    return <div className={styles.languageCard}>
        <CardBg src={bg} alt={"Language Card"} />
        <div className={styles.contentContainer}>
            <div className={styles.left}>
                <Category data={frameworks}/>
                <Category data={db}/>
            </div>
            <div className={styles.center}>
                <Category data={lang}/>
                <div className={styles.iconsGrid}>
                    {
                        icons.map((icon:string , i:number) => (
                            <div key={i} style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Image src={`/icons/${icon}.svg`} alt={icon} width={35} height={35} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.title}>
                    Skill Set
                </div>
                <Category data={cc}/>
            </div>
        </div>
    </div>
}

function Category({data}: {
    data: CtTools
}): React.ReactNode {
    return <div className={styles2.catg}>
        <p className={styles2.header}>
            {data.category}
        </p>
        <div className={styles2.grid}>
            {data.tools.map((dt, i) => (
                <div key={dt.icon} className={styles2.tool}>
                    <div className={styles2.icon}>
                        <Image src={`/icons/${dt.icon}.svg`} alt={dt.name} width={25} height={25}/>
                    </div>
                    <p className={styles2.name}>
                        {dt.name}
                    </p>
                </div>
            ))}
        </div>
    </div>
}