import React from 'react';
import styles from './styles.module.css';
import { profiles } from '../../profile/[username]/utils';

const TopPlayers: React.FC = () => {
    return (
        <div className={styles.topPlayers}>
            <h2>Top Players</h2>
            <ul>
                {profiles.map((profile, index) => (
                    <li key={index} className={styles.playerItem}>
                        <img
                            src={profile.image}
                            alt={profile.username}
                            className={styles.playerImage}
                        />
                        <div>
                            <h3>{profile.username}</h3>
                            <p>Country: {profile.country}</p>
                            <p>Premiere: {profile.rank.premiere}</p>
                            <p>Faceit: {profile.rank.faceit}</p>
                            <p>Esportal: {profile.rank.esportal}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopPlayers;
