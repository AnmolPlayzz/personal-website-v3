import styles from "./exp-card.module.css";
import Image from "next/image";
import bg from "@/public/about/grid/expbg.svg";
import orb from "@/public/about/grid/exporb.png"
import CardBg from "@/components/util/card-bg";

export default function ExpCard() {
    return <div className={styles.expCard}>
        <CardBg src={bg} alt={"BG"}/>
        <Image style={{
            zIndex: 2,
            filter: "blur(20px)",
        }} className={styles.orb} src={orb} alt={"Orb"} width={170} height={170} priority/>
        <Image style={{
            zIndex: 2,
        }} className={styles.orb} src={orb} alt={"Orb"} width={135} height={135} priority/>
        <div className={styles.text}>
            <span>writing code for</span>
            <div className={styles.box}>
                <span style={{
                    fontSize: "52px",
                    fontWeight: "bold",
                    lineHeight: 0.8,
                }}>3</span>
                <span style={{
                    fontSize: "14px",
                    fontWeight: "200",
                }}>
                    years
                </span>
            </div>
        </div>
    </div>
}