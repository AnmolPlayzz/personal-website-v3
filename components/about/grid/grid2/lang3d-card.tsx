import styles from "./lang3d-card.module.css"
import CardBg from "@/components/util/card-bg";
import bg from "@/public/about/grid/lang3d.png";

export default function Lang3dCard() {
    return <div className={styles.lang3dCard}>
        <CardBg src={bg} alt={"Language 3D"} />
    </div>
}