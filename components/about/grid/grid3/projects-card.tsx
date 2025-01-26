import styles from "./projects-card.module.css"
import CardBg from "@/components/util/card-bg";
import bg from "@/public/about/grid/linksbg.png";
import projects from "@/public/about/grid/projects.svg";
import Image from "next/image";
export default function ProjectsCard() {
    return <a className={styles.projectsCard} href="https://github.com/AnmolPlayzz?tab=repositories" target="_blank">
        <CardBg  src={bg} alt={"Links Background"} mode={"fill"} invert={true} />
        <div className={styles.head}>
            <Image src={projects} alt={"Projects Links"} width={45} />
            <p className={styles.text}>
                All Projects
            </p>
        </div>
    </a>
}