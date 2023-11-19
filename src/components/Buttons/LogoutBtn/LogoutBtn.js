import { TbLogout } from 'react-icons/tb';
import styles from './LogoutBtn.module.css';

const LogoutBtn = ({className}) => {
    return(
        <a className={`${styles.logoutBtn} ${className}`} href="/api/auth/logout">
            <TbLogout className={styles.logoutIcon} />
        </a>
    );
}

export default LogoutBtn;