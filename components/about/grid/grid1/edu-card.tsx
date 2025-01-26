import styles from "./edu-card.module.css";
import CardBg from "@/components/util/card-bg";
import bg from "@/public/about/grid/edubg.png";
import fg from "@/public/about/grid/edufg.svg";
import Image from "next/image";
export default function EduCard() {
    return <div className={styles.eduCard}>
        <CardBg src={bg} alt={"BG"} />
        <div className={styles.fg}>
            <Image style={{
                objectFit: "cover",
            }} src={fg} alt={"Fg"} fill/>
        </div>
        <div className={styles.text}>
            <span style={{
                fontSize: "1rem",
                fontWeight: "200",
            }}>
                Currently pursuing
            </span>
            <br />
            <span style={{
                fontSize: "1.7rem",
                fontWeight: "400",
            }}>
                B.Tech @ <span style={{
                fontWeight: "800",
            }}>NSUT</span>
            </span>
        </div>
    </div>
}