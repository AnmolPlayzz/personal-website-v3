import styles from "./ide-card.module.css"
import bg from "@/public/about/grid/ide.png";
import Image from "next/image";

export default function IdeCard() {
    return <div className={styles.ideCard}>
        <Image src={bg} alt={"IDE card"} className={styles.main} fill={true}/>
    </div>
}