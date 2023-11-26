import SideMenu from "./SideMenu";
import styles from './page.module.css';

export default function Dashboard() {
    return(
        <div>
            <SideMenu />
            <div className={styles.dashboardMain}>
                <h1 className={styles.welcomeMessage}>Welcome</h1>
            </div>
        </div>
    );
}