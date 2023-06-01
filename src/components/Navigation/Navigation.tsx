import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';


const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.item}>
                <NavLink to='/' className={(linkClass) => linkClass.isActive
                    ? styles.active
                    : styles.item}>Главная</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/shop' className={(linkClass) => linkClass.isActive
                    ? styles.active
                    : styles.item}>Магазин</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/about' className={(linkClass) => linkClass.isActive
                    ? styles.active
                    : styles.item}>О бренде</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/contacts' className={(linkClass) => linkClass.isActive
                    ? styles.active
                    : styles.item}>Контакты</NavLink>
            </div>
        </nav>
    );
};


export default Navigation;