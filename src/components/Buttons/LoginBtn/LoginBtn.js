import styles from './LoginBtn.module.css';

const LoginBtn = ({className}) => {
    return(
        <a className={`${styles.loginBtn} ${className}`} href="/api/auth/login">
            Log in
        </a>
    );
}

export default LoginBtn;