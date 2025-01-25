import styles from "./name-card.module.css";
import bg from "@/public/about/grid/namebg.svg"
import CardBg from "@/components/util/card-bg";

export default function NameCard() {
    return <div className={styles.nameCard}>
        <CardBg src={bg} alt={"BG"} />
        <div className={styles.textContainer}>
            <div style={{
                fontWeight: "lighter",
                fontSize: "24px",
                color: "white",
            }}>
                Hi, I'm
            </div>
            <h1 className={styles.heading}>
                Anmol
            </h1>
        </div>
    </div>
}