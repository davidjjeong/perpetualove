import styles from './Thumbnail.module.css';

import { FaRegHeart } from 'react-icons/fa';

export default function Thumbnail() {
    return(
        <div className="flex flex-col items-center gap-y-5">
            <h2 className={styles.distanceIndicator}>
                We are Together
            </h2>
            <div className="flex flex-row items-center justify-center gap-x-5">
                <div className={styles.circledText}>
                    <div className={styles.text}>
                        David
                    </div>
                </div>
                <FaRegHeart className={styles.heartIcon}/>
                <div className={styles.circledText}>
                    <div className={styles.text}>
                        Wendy
                    </div>
                </div>
            </div>
        </div>
    );
}