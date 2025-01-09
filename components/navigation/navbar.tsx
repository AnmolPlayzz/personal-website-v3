"use client"
import styles from "./navbar.module.css"
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useVisibleSection} from "@/hooks/useVisibleSection";
export default function Navbar() {
    //Tracking the current content on the screen
    const sections : string[] = ['home', 'about', 'projects'];
    const current : string | null = useVisibleSection(sections);

    //For the desktop nav
    const [x, setX] = useState<number | null>(null);
    const [y, setY] = useState<number | null>(null);
    const [width, setWidth] = useState<number | null>(null);
    const [height, setHeight] = useState<number | null>(null);

    //For the mobile nav
    const [open, setOpen] = useState<boolean>(false);

    function handleMouseOver(e: any) {
        const data = e.target.getBoundingClientRect()
        if (data == null) return;
        const dataNav: Element | null = document.querySelector(`.${styles.mainLinks}`)
        let dataNavBar;
        if (dataNav)  {
            dataNavBar = dataNav.getBoundingClientRect();
            setX(data.left - dataNavBar.left - 1)
            setY(data.top - dataNavBar.top - 1)
        }
        setHeight(data.height)
        setWidth(data.width)
    }

    function handleMouseOut(e?: React.MouseEvent)  {
        const active = document.querySelector(`.${styles.activeLinkDesktop}`)
        if (!active) return;
        const dataNav: Element | null = document.querySelector(`.${styles.mainLinks}`)
        if (!dataNav) return;
        const data = active.getBoundingClientRect()
        const dataNavBar = dataNav.getBoundingClientRect();
        setX(data.left - dataNavBar.left - 1)
        setY(data.top - dataNavBar.top - 1)
        setHeight(data.height)
        setWidth(data.width)
        console.log(data)

    }


    function handleItemClick(e?: any) {
        setTimeout(handleMouseOut, 200)
    }

    function handleMobileClick(e?: React.MouseEvent) {
        setOpen((prev: boolean): boolean => !prev);
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            handleMouseOut()
        });
        return () => {
            window.removeEventListener('resize', () => {
                handleMouseOut()
            });
        };
    }, []);
    useEffect(() => {
        console.log("attempting change",current)
        setTimeout(handleMouseOut, 100)
    }, [current]);

    return (<nav className={styles.nav}>
        <div className={styles.desktopNav}>
            <div className={styles.leftDesktopNav}>
                <div className={styles.logo}>
                    <Image src="/nav/mainav.png" alt="Main Avatar" width={32} height={32}/>
                </div>
                <span className={styles.name}>Anmol</span>
            </div>
            <div className={styles.centreDesktopNav}>
                <div className={styles.mainLinks} onMouseOut={handleMouseOut}>
                    <Link href="#home"
                          className={current == "home" ? `${styles.navLinks} ${styles.activeLinkDesktop}` : styles.navLinks}
                          onMouseOver={handleMouseOver} onClick={handleItemClick}>Home</Link>
                    <Link href="#about"
                          className={current == "about" ? `${styles.navLinks} ${styles.activeLinkDesktop}` : styles.navLinks}
                          onMouseOver={handleMouseOver} onClick={handleItemClick}>About</Link>
                    <Link href="#projects"
                          className={current == "projects" ? `${styles.navLinks} ${styles.activeLinkDesktop}` : styles.navLinks}
                          onMouseOver={handleMouseOver} onClick={handleItemClick}>Projects</Link>
                    <div className={styles.follower}
                         style={{
                             top: `${y}px`,
                             left: `${x}px`,
                             width: `${width}px`,
                             height: `${height}px`,
                         }}></div>
                </div>
            </div>
            <div className={styles.rightDesktopNav}>
                <a href="https://github.com/AnmolPlayzz" target="_blank" className={styles.logo}>
                    <Image src={"/nav/github-mark-white.svg"} alt={"GitHub"} width={20} height={20}/>
                </a>
            </div>
        </div>
        <div className={styles.mobileNav}>
            <div className={styles.leftMobileNav}>
                <div className={styles.logo}>
                    <Image src="/nav/mainav.png" alt="Main Avatar" width={32} height={32}/>
                </div>
                <span className={styles.name}>Anmol</span>
            </div>
            <div className={styles.rightMobileNav}>
                <button onClick={handleMobileClick}
                        className={open ? `${styles.menuOpen} ${styles.menuIcon}` : styles.menuIcon}>
                    <div className={styles.whiteBars}>
                        <div className={styles.b1}></div>
                        <div className={styles.b2}></div>
                        <div className={styles.b3}></div>
                    </div>
                    <div className={styles.gradientBars}>
                        <div className={styles.a1}></div>
                        <div className={styles.a2}></div>
                        <div className={styles.a3}></div>
                    </div>
                </button>
            </div>
            <div className={open ? `${styles.expand} ${styles.open}` : styles.expand}>
                <div className={styles.menuAnim1}></div>
                <div className={styles.menuAnim2}></div>
                <div className={styles.menuAnim3}></div>
                <div className={styles.mobileMenu}>
                    <div className={styles.mobileTop}>
                        <div className={styles.leftMobileMenu}>
                            <a href="https://github.com/AnmolPlayzz" target="_blank" className={styles.logo}>
                                <Image src={"/nav/github-mark-white.svg"} alt={"GitHub"} width={20} height={20}/>
                            </a>
                        </div>
                        <div className={styles.rightMobileMenu}>
                            <button onClick={handleMobileClick} className={styles.logo}>
                                <Image src={"/nav/cross-nav.svg"} alt={"Menu Close"} width={30} height={30}/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <a href="#home" onClick={handleMobileClick}
                           className={current == "home" ? `${styles.current} ${styles.mobileLink}` : styles.mobileLink}>
                            Home
                        </a>
                        <a href="#about" onClick={handleMobileClick}
                           className={current == "about" ? `${styles.current} ${styles.mobileLink}` : styles.mobileLink}>
                            About
                        </a>
                        <a href="#projects" onClick={handleMobileClick}
                           className={current == "projects" ? `${styles.current} ${styles.mobileLink}` : styles.mobileLink}>
                            Projects
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>)
}