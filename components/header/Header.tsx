import Link from 'next/link';
import headerStyle from './header.module.scss';
import Logo from '../logo/Logo';
const Header = () => {
    return (
        <nav className={`${headerStyle.root}`}>
            <Link href={'/'} className={headerStyle.logo}>
                <Logo  height={47} width={150} />
            </Link>


          
        </nav>
    )
}

export default Header