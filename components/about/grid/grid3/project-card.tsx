import styles from "./project-card.module.css";
import bg from "@/public/about/grid/pb.png";
import dash from "@/public/about/grid/pbDash.png";
import dsc from "@/public/about/grid/pbDiscord.png"
import CardBg from "@/components/util/card-bg";
import Image from "next/image";

export default function ProjectCard() {
    return <div className={styles.projectCard}>
        <CardBg src={bg} alt={"Project"} />
        <div className={styles.header}>
            <h1 className={styles.h1}>
                PolyBot
                <div className={styles.blur}></div>
            </h1>
            <p className={styles.p}>
                A completely open-source Discord bot with everything from silly commands to a web dashboard.
            </p>
        </div>
        <div className={styles.images}>
            <div className={styles.bottom}>
                <Image style={{
                    borderRadius: "20px",
                    boxShadow: "0 0 50px black"
                }} src={dash} alt={"Dashboard"} width={180}/>
            </div>
            <div className={styles.top}>
                <Image style={{
                    borderRadius: "20px",
                    boxShadow: "0 0 50px black"

                }} src={dsc} alt={"Dashboard"} width={180}/>
            </div>
        </div>
    </div>
}