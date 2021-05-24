import { Header } from "@components/header";
// styles
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
    return (
        <div className={styles.Layout}>
            <div className={styles.Header}>
                <Header />
            </div>
            <div className={styles.Content}>{children}</div>
        </div>
    );
};

export default Layout;
