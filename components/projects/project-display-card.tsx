import styles from "./project-display-card.module.css"
import CardBg from "@/components/util/card-bg";
import ToolIcons from "@/components/util/tool-icons";
export default function ProjectDisplayCard({name,image, tools,description = null}: {
    name: string;
    image: string;
    tools: string[];
    description?: string | null;
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
            <ToolIcons list={tools}/>
        </div>
    </div>)
}