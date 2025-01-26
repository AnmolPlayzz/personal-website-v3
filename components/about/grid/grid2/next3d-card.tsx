import styles from "./next3d-card.module.css"
import bg from "@/public/about/grid/next3d.png"
import CardBg from "@/components/util/card-bg";

export default function Next3dCard() {
    return <div className={styles.next3dCard}>
        <CardBg src={bg} alt={"NextJs card"} />
    </div>
}