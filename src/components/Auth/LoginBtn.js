import styles from './LoginBtn.module.css';

const LoginBtn = () => {
    return(
        <button className={styles.loginBtn} type="button">
            Sign in
        </button>
    );
}

export default LoginBtn;