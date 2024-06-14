'use client';

import React from 'react';
import Navbar from '../../components/navbar';
import styles from './styles.module.css';
import { profiles } from './utils';

const Profile: React.FC = () => {
    const profileData = profiles.find((profile) =>
        profile.username.toLowerCase()
    );

    if (!profileData) {
        return (
            <>
                <Navbar />
                <div className={styles.container}>
                    <div>
                        <a className={styles.back} href="/">
                            ← Go back
                        </a>
                    </div>
                    <div className={styles.profile}>
                        <h1>Profile Not Found</h1>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div>
                    <a className={styles.back} href="/">
                        ← Go back
                    </a>
                </div>
                <div className={styles.profile}>
                    <h1>Profil</h1>
                    <div className={styles.profileItems}>
                        <div className={styles.profileItem}>
                            <div className={styles.profileLabel}>Username:</div>
                            <div className={styles.profileValue}>
                                {profileData.username}
                            </div>
                        </div>
                        <div className={styles.profileItem}>
                            <div className={styles.profileLabel}>Country:</div>
                            <div className={styles.profileValue}>
                                {profileData.country}
                            </div>
                        </div>
                        <div className={styles.profileItem}>
                            <div className={styles.profileLabel}>Rank:</div>
                            <ul className={styles.profileValue}>
                                <li>Premiere: {profileData.rank.premiere}</li>
                                <li>Faceit: {profileData.rank.faceit}</li>
                                <li>Esportal: {profileData.rank.esportal}</li>
                            </ul>
                        </div>
                        <div className={styles.profileItem}>
                            <img
                                src={profileData.image}
                                alt="Profile"
                                className={styles.profileImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
