import Link from 'next/link';
import styles from './Menu.module.css';

export default function Menu() {
    const unAuthLinks = [
        { name: "Home", to: "/", id: 1 },
    ];

    return(
        <div className={styles.menuContainer}>
            {unAuthLinks.map(({name, to, id}) => (
                <Link className={styles.menuLink} key={id} href={to}>{name}</Link>
            ))}
        </div>
    );
}