import SignupBtn from '@/components/Buttons/SignupBtn/SignupBtn';
import Thumbnail from './Thumbnail';
import styles from './page.module.css';
import LoginBtn from '@/components/Buttons/LoginBtn/LoginBtn';

export default function Home() {
  return (
    <div className={styles.indexContainer}>
      <div className={styles.rightCol}>
        <Thumbnail />
      </div>
      <div className={styles.leftCol}>
        <h1 className={styles.indexHeader}>
          Perpetua<span className={styles.coloredText}>Love.</span>
        </h1>
        <p className={styles.indexDescription}>
          Wherever you go, always stay connected to your loved ones.
        </p>
        <div className="mt-[36px]">
          <SignupBtn className="mr-[24px]"/>
          <LoginBtn />
        </div>
      </div>
    </div>
  );
}
