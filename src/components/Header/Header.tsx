import { Fragment, useState } from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Phone from '../Phone/Phone';
import Basket from '../Basket/Basket';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Modal from '../Modal/Modal';


const Header = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [burgerIsOpen, setBurgerIsOpen] = useState(false);

    return (
        <Fragment>
            <header className={styles.main}>
                <Logo />
                <Navigation />
                <section>
                    <Phone setModalIsOpen={setModalIsOpen} />
                    <span className={styles.telNumber}>+7 (495) 823-54-12</span>
                    <Basket count={10} />
                        <BurgerMenu 
                            burgerIsOpen={burgerIsOpen} 
                            setBurgerIsOpen={setBurgerIsOpen}
                            setModalIsOpen={setModalIsOpen} />
                </section>
            </header>
            <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        </Fragment>
    );
};


export default Header