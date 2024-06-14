'use client';

import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import Title from '@/app/components/title';
import LoginWall from '@/app/components/loginWall';
import styles from './main.module.css';
import { useSession } from 'next-auth/react';
import TopPlayers from './components/topPlayers';

export default function Home() {
    const { data: session } = useSession();

    return (
        <main className={styles.main}>
            <Navbar />
            <Title text="Welcome to Fuego" size="large" />
            {session ? (
                <div>
                    <p>Welcome, {session.user?.name}</p>
                </div>
            ) : (
                <LoginWall />
            )}
            <TopPlayers />
            <Footer />
        </main>
    );
}
