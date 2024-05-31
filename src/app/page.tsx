import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import Title from '@/app/components/title';
import CreateAccount from '@/app/components/createAccount';
import styles from './main.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar />
            <Title text="Welcome to Fuego" size="large" />
            <Footer />
            <CreateAccount />
        </main>
    );
}
