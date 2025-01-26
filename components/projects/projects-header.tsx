import styles from "./projects-header.module.css";
import CardBg from "@/components/util/card-bg";
import head from "@/public/projects/projhead.png";
export default function ProjectsHeader() {
    return <div className={styles.projectsHeader}>
        <CardBg src={head} alt={"Project Head image"} />
    </div>
}