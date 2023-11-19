"use client";

import { useUser } from '@auth0/nextjs-auth0/client';
import { MdChatBubbleOutline, MdOutlineBubbleChart, MdOutlineInsertPhoto } from 'react-icons/md';
import Image from 'next/image';

import LogoutBtn from '@/components/Buttons/LogoutBtn/LogoutBtn';
import styles from './SideMenu.module.css';

export default function SideMenu() {
    const { user } = useUser();

    const Features = ({ulClass, liClass, featureIconClass}) => {
        return(
            <ul className={ulClass}>
                <li className={liClass}>
                    <MdOutlineBubbleChart className={featureIconClass} />
                    <h1 className={styles.featureDescription}>Mood Bubble</h1>
                </li>
                <li className={liClass}>
                    <MdChatBubbleOutline className={featureIconClass} />
                    <h1 className={styles.featureDescription}>Chat</h1>
                </li>
                <li className={liClass}>
                    <MdOutlineInsertPhoto className={featureIconClass} />
                    <h1 className={styles.featureDescription}>Photo Memory</h1>
                </li>
            </ul>
        );
    }

    return(
        user && (
            <aside className={styles.sideMenu}>
                <div className="mt-[25vh]">
                    <h2 className={styles.featuresTitle}>Overview</h2>
                    <Features 
                        ulClass={styles.featureList}
                        liClass={styles.featureItem}
                        featureIconClass={styles.featureIcon} 
                    />
                </div>
                <div className="flex flex-row-reverse justify-between">
                    <LogoutBtn />
                    {user.picture && (
                        <div className={styles.userPicture}>
                            <Image
                                src={user.picture}
                                alt="Profile Image"
                                width={50}
                                height={50}
                            />
                        </div>
                    )}
                </div>
            </aside>
        )
    );
}