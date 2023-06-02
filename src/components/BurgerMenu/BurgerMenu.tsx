import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import { Fragment } from 'react';


type Props = {
    burgerIsOpen: boolean,
    setOpenBurger: Function
};


const BurgerMenu = ({
    burgerIsOpen,
    setOpenBurger
}: Props) => {
    return (
        <Fragment>
            <div className={burgerIsOpen ? `${styles.burgerOpened}` : `${styles.burgerClosed}`}>
                <span></span>
            </div>
            <div className={burgerIsOpen ? `${styles.burgerNavOpened}` : `${styles.burgerNavClosed}`}>
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
                <div className={styles.item}>
                    Заказать звонок
                </div>
            </div>
        </Fragment>
    );
};


export default BurgerMenu;