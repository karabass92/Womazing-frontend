import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import { Fragment } from 'react';


type Props = {
    burgerIsOpen: boolean,
    setBurgerIsOpen: Function,
    setModalIsOpen: Function
};


const BurgerMenu = ({
    burgerIsOpen,
    setBurgerIsOpen,
    setModalIsOpen
}: Props) => {
    return (
        <Fragment>
            <div 
                onClick={() => setBurgerIsOpen(!burgerIsOpen)}
                className={burgerIsOpen ? `${styles.burgerOpened}` : `${styles.burgerClosed}`}>
                <span></span>
            </div>
            <div className={burgerIsOpen ? `${styles.burgerNavOpened}` : `${styles.burgerNavClosed}`}>
                <div className={styles.item}
                    onClick={() => setBurgerIsOpen(false)} >
                    <NavLink to='/' className={(linkClass) => linkClass.isActive
                        ? styles.active
                        : styles.item}>Главная</NavLink>
                </div>
                <div className={styles.item}
                    onClick={() => setBurgerIsOpen(false)} >
                    <NavLink to='/shop' className={(linkClass) => linkClass.isActive
                        ? styles.active
                        : styles.item}>Магазин</NavLink>
                </div>
                <div className={styles.item}
                    onClick={() => setBurgerIsOpen(false)} >
                    <NavLink to='/about' className={(linkClass) => linkClass.isActive
                        ? styles.active
                        : styles.item}>О бренде</NavLink>
                </div>
                <div className={styles.item}
                    onClick={() => setBurgerIsOpen(false)} >
                    <NavLink to='/contacts' className={(linkClass) => linkClass.isActive
                        ? styles.active
                        : styles.item}>Контакты</NavLink>
                </div>
                <div className={styles.item} onClick={() => setModalIsOpen(true)}>
                    Заказать звонок
                </div>
            </div>
        </Fragment>
    );
};


export default BurgerMenu;