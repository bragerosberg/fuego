import { signIn, signOut, useSession } from 'next-auth/react';
import styles from './styles.module.css';

const LoginButton = () => {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <p className={styles.welcome}>Welcome, {session.user?.name}</p>
                <button className={styles.button} onClick={() => signOut()}>
                    Sign out
                </button>
            </>
        );
    }

    return (
        <button className={styles.button} onClick={() => signIn('google')}>
            Sign in with Google
        </button>
    );
};

export default LoginButton;
