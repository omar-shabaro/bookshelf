import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { makeNavClass } from "../../utils/utils";
import logo from '../../assets/logo.png';
import { navLinks } from "../../data/navLinks";

const Header = () => {
    const [open, setOpen] = useState(false);
    const navClass = makeNavClass(styles.active);

    const navRef = useRef<HTMLElement>(null);
    const burgerRef = useRef<HTMLButtonElement>(null);

    const handleNavClick = (e: React.MouseEvent) => {
        // if (!open) return; // only care when menu is open also for make sure when we are on mobile
        const target = e.target as HTMLElement;
        if (target.closest("a")) {
            closeMenu();
        }
    };

    const toggleMenu = () => setOpen(o => !o);
    const closeMenu = () => setOpen(false);

    useEffect(() => {
        if (!open) return;
        const handleClickOutside = (e: MouseEvent) => {
            const el = e.target as Node;
            if (
                navRef.current?.contains(el) ||
                burgerRef.current?.contains(el)
            ) {
                return; // inside nav or burger to ignore
            }
            closeMenu();
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);



    return (
        <header className={styles.wrap} role="banner">
            <div className="container">
                <div className={styles.bar}>
                    <div className={styles.actions}>
                        {/* Burger for mobile */}
                        <button
                            ref={burgerRef}
                            className={styles.burger}
                            aria-label="Toggle navigation"
                            aria-expanded={open}
                            aria-controls="site-nav"
                            onClick={toggleMenu}
                        >
                            <div aria-hidden className={styles.burgerIcon} />
                        </button>
                    </div>
                    <a rel="preload" className={styles.logo} href="/" aria-label="BooksReviews logo">
                        <img src={logo} alt="BooksReviews" />
                    </a>
                    <nav id="site-nav"
                        onClick={handleNavClick}
                        ref={navRef}
                        className={`${styles.nav} ${open ? styles.open : ""}`} aria-label="Primary">
                        {navLinks.map((l) => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                end={l.end}
                                className={navClass}
                            >
                                {l.label} {l.hasDropdown ? <span className={styles.dropdownArrow}></span> : null}
                            </NavLink>
                        ))}
                    </nav>
                    <button className={styles.iconBtn} aria-label="Search">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M21 21l-4.3-4.3m2.3-5.7a8 8 0 11-16 0 8 8 0 0116 0z"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header;
