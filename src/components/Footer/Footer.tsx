import { makeNavClass } from "../../utils/utils";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

const Footer = () => {
    const navClass = makeNavClass(styles.active);
    return (
        <footer className={styles.wrap} role="contentinfo">
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.section}>
                        <h3 className={styles.h}>Navigation</h3>
                        <ul>
                            {navLinks.map((l) => (
                                <li key={l.to}>
                                    <NavLink to={l.to} end={l.end} className={navClass}>
                                        {l.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.section}>
                        <h3 className={styles.h}>Categories</h3>
                        <ul className={styles.cols}>
                            <li>Art</li><li>Biography</li><li>Business</li><li>Chick Lite</li><li>Children's</li><li>Christian</li><li>Classic</li><li>Comics</li>
                            <li>Contemporary</li><li>Cookbooks</li><li>Ebooks</li><li>Fantasy</li><li>Fiction</li><li>Gay And Lesbian</li><li>Graphic Novels</li>
                            <li>Historical Fiction</li><li>History</li><li>Horror</li><li>Humor And Comedy</li><li>Manga</li><li>Memoir</li><li>Music</li>
                        </ul>
                    </div>
                    <div className={styles.section}>
                        <h3 className={styles.h}>Follow Us</h3>
                        <ul>
                            <li><a href="#" rel="noopener">Facebook</a></li> // Add rel="noopener" for security
                            <li><a href="#" rel="noopener">Twitter</a></li>
                            <li><a href="#" rel="noopener">RSS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
