import Link from 'next/link';
import headerStyle from './header.module.scss';
import Logo from '../logo/Logo';
import { ReactComponent as DropDown } from '@/resources/images/dropdown.svg';

const headerLinks = [
    {
        title: 'services',
        submenu: [
            { title: 'Product Engineering' }
        ]
    },
    {
        title: 'solutions'
    },
    {
        title: 'insights'
    },

]


const Header = () => {
    return (
        <nav className={`${headerStyle.root}`}>
            <div className={`container ${headerStyle.root_container}`}>
                <Link href={'/'} className={headerStyle.logo}>
                    <Logo height={47} width={150} />
                </Link>

                {/* <ul className={`${headerStyle.root_navlist}`}>
                    {headerLinks.map((headerlink) => <li className={`${headerStyle.root_navitem}`}>
                        <Link href={headerlink.title}>{headerlink.title}</Link>
                        
                        {headerlink?.submenu && <div className=''>
                            I am mega menu
                        </div>}


                    </li>

                    )}
                </ul> */}
            </div>




        </nav>
    )
}

export default Header