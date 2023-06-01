import { NavLink } from 'react-router-dom';
import styles from './Logo.module.scss';
import logo from '../../assets/img/mainLogo.svg';


const Logo = () => {
    return (
        <NavLink to={'/'}>
            <img src={logo} alt="logo" />
            <span className={styles.name}>Womazing</span>
        </NavLink>
    )
};


export default Logo;