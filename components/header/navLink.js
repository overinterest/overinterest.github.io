import Link from "next/link";
// styles
import styles from "./Nav.module.css";

const NavLink = ({ link, title }) => {
    return (
        <Link href={link}>
            <a className={styles.NavLink}>{title}</a>
        </Link>
    );
};

export default NavLink;
