import styles from "./project-display-card.module.css"
import CardBg from "@/components/util/card-bg";
import ToolIcons from "@/components/util/tool-icons";

export type Links = Link[]

export interface Link {
    name: string;
    url: string;
}

export default function ProjectDisplayCard({name,image, tools,links,description = null}: {
    name: string;
    image: string;
    tools: string[];
    description?: string | null;
    links: Links;
}) {
    return (<div className={styles.projectDisplayCard}>
        <CardBg src={`/projects/list/${image}.png`} alt={"Dashboard PolyBot"}/>
        <div className={styles.info}>
            <h1 className={styles.h1}>
                {name}
            </h1>
            {description ? <p className={styles.p}>
                {description}
            </p> : null}
            <div className={styles.tools}>
                <ToolIcons list={tools}/>
            </div>
            <div style={{
                marginTop: "15px",
            }} className={styles.linkCont}>
                <LinkList data={links} />
            </div>
        </div>
        <div className={styles.linkContainer}>
            <LinkList data={links} />
        </div>
    </div>)
}

export function LinkList({data, compact = false}: {
    data: Links;
    compact?: boolean;
}) {
    return <div className={compact ? `${styles.links} ${styles.compact}` : styles.links}>
        {data.map((item, index) => {
            return (
                <a key={index} className={styles.link} href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                </a>
            )
        })}
    </div>
}