import fuego from '../../../../public/fuego.png'
import Image from 'next/image'
import css from './styles.module.css'
import Login from '@/app/components/login'
import Profile from '@/app/components/profile'

const Navbar = () => {
    // unused variable to maintain func body
    const foo = 'bar'
    return (
        <div className={css.navbar}>
            <div>
                <Image
                    alt="fuego"
                    className={css.image}
                    src={fuego}
                    width={50}
                    height={50}
                />
            </div>
            <div className={css.flex}>
                <Profile />
                <Login />
            </div>
        </div>
    )
}

export default Navbar
