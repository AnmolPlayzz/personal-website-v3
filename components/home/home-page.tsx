import styles from "./home-page.module.css";
import art3d from "@/public/home/3dart.png"
import mouse from "@/public/home/mouse.svg"
import Image from "next/image";
import MainHeading from "@/components/home/client/main-heading";
export default function HomePage() {
    return <div className={styles.homePage}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1057.21 810.97" className={styles.bg1}>
            <defs>
                <linearGradient id="linear-gradient" x1="-7.93" y1="91.61" x2="1127.51" y2="747.16"
                                gradientTransform="translate(1062.58 805.86) rotate(-180)"
                                gradientUnits="userSpaceOnUse">
                    <stop offset=".45" stopColor="#be91ff"/>
                    <stop offset=".51" stopColor="#ae8bf8"/>
                    <stop offset=".66" stopColor="#8e80ec"/>
                    <stop offset=".78" stopColor="#7b7ae4"/>
                    <stop offset=".86" stopColor="#7478e2"/>
                </linearGradient>
                <radialGradient id="radial-gradient" cx="503.11" cy="193.97" fx="572.88" fy="1086.75" r="1034.95"
                                gradientTransform="translate(1062.58 710.44) rotate(-180) scale(1 .77)"
                                gradientUnits="userSpaceOnUse">
                    <stop offset=".07" stopColor="#000"/>
                    <stop offset=".64" stopColor="#000" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="radial-gradient-2" cx="607.99" cy="203.13" fx="1213.1" fy="-284.12" r="908.65"
                                gradientTransform="translate(1054.74 741.73) rotate(-180) scale(1.01 .9)"
                                gradientUnits="userSpaceOnUse">
                    <stop offset=".41" stopColor="#000" stopOpacity="0"/>
                    <stop offset=".79" stopColor="#000"/>
                </radialGradient>
            </defs>
            <g className={styles.cls2}>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_2-2" data-name="Layer 2">
                        <g>
                            <rect className={styles.cls5} x="5.36" width="1051.85" height="805.86"
                                  transform="translate(1062.58 805.86) rotate(180)"/>
                            <rect className={styles.cls1} x="5.36" width="1051.85" height="805.86"
                                  transform="translate(1062.58 805.86) rotate(180)"/>
                            <rect className={styles.cls4} width="1057.21" height="810.97"
                                  transform="translate(1057.21 810.97) rotate(180)"/>
                        </g>
                        <path className={styles.cls3}
                              d="M1057.21,216.4H0M1057.21,303.52H0M1057.21,390.65H0M1057.21,477.77H0M1057.21,564.89H0M1003.4,0v810.96M916.28,0v810.96M829.16,0v810.96M742.04,0v810.96M654.92,0v810.96M567.79,0v810.96M480.67,0v810.96M393.55,0v810.96M306.43,0v810.96M219.31,0v810.96M132.18,0v810.96M45.06,0v810.96M0,739.13h1057.21M0,652.01h1057.21M0,42.16h1057.21M0,129.28h1057.21"/>
                    </g>
                </g>
            </g>
        </svg>
        <MainHeading/>
        <div className={styles.artContainer}>
            <Image src={art3d} alt="Art 3D" style={{
                filter: 'blur(50px)'
            }} className={styles.art} quality={100} fill={true}/>
            <Image style={{
            }} src={art3d} alt="Art 3D" className={styles.art} quality={100} fill={true}/>
        </div>
        <div className={styles.cta}>
            <div className={styles.ctaLogo}>
                <Image className={styles.mouse} src={mouse} alt="Mouse" width={20}/>
                <Image className={styles.mouse} src={mouse} alt="Mouse" style={{
                    filter: 'blur(12px)',
                }} width={20}/>
            </div>
            <p style={{
                color: '#ffffff',
            }} >
                Scroll down
            </p>
        </div>
    </div>
}