import styles from "./footer.module.css";

export default function Footer() {
    return (<div className={styles.footer}>
        <div className={styles.bar}></div>
        <div style={{
            height: "40px",
            filter: "blur(100px)",
        }} className={styles.bar}></div>
        <div className={styles.content}>
            <p style={{
                float: "left"
            }}>
                Anmol Sharma
            </p>
            <p style={{
                float: "right"
            }}>
                © 2025
            </p>
        </div>

    </div>)
}