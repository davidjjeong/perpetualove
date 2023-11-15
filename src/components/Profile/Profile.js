import { FaRegUserCircle } from 'react-icons/fa';

import styles from './Profile.module.css';

const Profile = () => {
    return(
        <div className={styles.profile}>
            <FaRegUserCircle color="#FFF" size={45} />
        </div>
    );
}

export default Profile;