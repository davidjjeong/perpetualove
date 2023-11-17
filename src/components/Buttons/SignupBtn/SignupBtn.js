import styles from './SignupBtn.module.css';

const SignupBtn = ({className}) => {
    return(
        <a className={`${styles.signupBtn} ${className}`} href="/api/auth/signup">
            Sign up
        </a>
    );
}

export default SignupBtn;