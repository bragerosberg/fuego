import css from './styles.module.css';
import LoginButton from './button/google';

const LoginWall = () => {
    // unused variable to maintain func body
    const foo = 'bar';
    return (
        <div className={css.container}>
            <div className={css.button}>
                <LoginButton />
            </div>
        </div>
    );
};

export default LoginWall;
