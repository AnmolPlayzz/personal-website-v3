import styles from "./socials-card.module.css"
import CardBg from "@/components/util/card-bg";
import bg from "@/public/about/grid/socialsbg.svg";
import Image from "next/image";

import gh from "@/public/icons/github.svg";
import x from "@/public/icons/x.svg";
import dc from "@/public/icons/discord.svg";
import ig from "@/public/icons/ig.svg";

export default function SocialsCard() {
    return (<div className={styles.socialsCard}>
        <div style={{
            top: "-10%",
            left: "-10%",
            filter: "blur(40px)",
            width: "120%",
            height: "120%",
        }}>
            <CardBg src={bg} alt={"BG"} />
        </div>
        <div className={styles.links}>
                <a style={{
                    background: "white",
                    boxShadow: "0px 0px 15px white"
                }} className={styles.container} href="https://github.com/AnmolPlayzz" target="_blank" rel="noreferrer noopener">
                    <Image className={styles.icon} src={gh} alt={"GitHub"} width={40} height={40} />
                </a>
                <a style={{
                    background: "black",
                    boxShadow: "0px 0px 15px black"
                }} className={styles.container} href="https://x.com/AnmolPlayzz" target="_blank" rel="noreferrer noopener">
                    <Image className={styles.icon} src={x} alt={"GitHub"} width={40} height={40} />
                </a>
                <a style={{
                    background: "#5865F1",
                    boxShadow: "0px 0px 15px #5865F1"
                }} className={styles.container} href="https://discord.com/users/770548285656006666" target="_blank" rel="noreferrer noopener">
                    <Image className={styles.icon} src={dc} alt={"GitHub"} width={40} height={40} />
                </a>
                <a style={{
                    background: "linear-gradient(150deg, rgba(248, 205, 52, 1) 0%, rgba(237, 42, 123, 1) 50%, rgba(98, 40, 214, 1) 100%)",
                }} className={`${styles.ig} ${styles.container}`}  href="https://instagram.com/anmolsharma_16" target="_blank" rel="noreferrer noopener">
                    <Image className={styles.icon} src={ig} alt={"GitHub"} width={40} height={40} />
                </a>
        </div>
    </div>)
}