import styles from "./mail-card.module.css"
import CardBg from "@/components/util/card-bg";
import bg from "@/public/about/grid/linksbg.png";
import mail from "@/public/about/grid/mail.svg";
import Image from "next/image";
export default function MailCard() {
    return <a className={styles.mailCard} href="mailto:anmolsharma5277@gmail.com">
        <CardBg src={bg} alt={"Links Background"} mode={"fill"} />
        <div className={styles.head}>
            <Image src={mail} alt={"Mail Links"} width={50} />
            <p className={styles.text}>
                Contact Me
            </p>
        </div>
    </a>
}