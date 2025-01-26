import styles from "./cc3d-card.module.css"
import bg from "@/public/about/grid/cc3d.png"
import CardBg from "@/components/util/card-bg";

export default function Cc3dCard() {
    return <div className={styles.cc3dCard}>
        <CardBg src={bg} alt={"CC card"} />
    </div>
}