import React from 'react';
import styles from './styles.module.css';
import { profiles } from '../../profile/[username]/utils';

const TopPlayers: React.FC = () => {
    return (
        <div className={styles.topPlayers}>
            <h2>Top Players</h2>
            <div className={styles.playerList}>
                {profiles.map((profile) => (
                    <a
                        href={`/profile/${profile.username}`}
                        className={styles.playerItem}
                    >
                        <img
                            src={profile.image}
                            alt={profile.username}
                            className={styles.playerImage}
                        />
                        <div>
                            <h3 className={styles.username}>
                                {profile.username}
                            </h3>
                            <p className={styles.rank}>
                                Premiere: {profile.rank.premiere}
                            </p>
                            <p className={styles.rank}>
                                Faceit: {profile.rank.faceit}
                            </p>
                            <p className={styles.rank}>
                                Esportal: {profile.rank.esportal}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default TopPlayers;
