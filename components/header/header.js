import { Fragment } from "react";
import Link from "next/link";
// internal
import { default as NavLink } from "./navLink";
// styles
import styles from "./Header.module.css";

const Header = () => {
    return (
        <Fragment>
            <div className={styles.Banner}>
                <Link href="/">
                    <button href="/" className={styles.Logo}>
                        OI
                        <span className={styles.Title}>overinterest</span>
                    </button>
                </Link>
            </div>
            <div className={styles.Links}>
                <NavLink link="/about" title="About" />
                <NavLink link="/projects" title="Projects" />
                <NavLink link="/blog" title="Blog" />
            </div>
        </Fragment>
    );
};

export default Header;
