import styles from './Footer.module.scss';
import Logo from "../Logo/Logo";
import instagram from '../../assets/img/footer/instagramIcon.png';
import facebook from '../../assets/img/footer/facebookIcon.svg';
import twiter from '../../assets/img/footer/twiterIcon.svg';
import visa from '../../assets/img/footer/visaIcon.svg';
import Navigation from "../Navigation/Navigation";


const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <footer className={styles.main}>
                <section className={styles.leftSide}>
                    <div>
                        <Logo />
                        <div className={styles.generalInfo}>
                            <p>© Все права защищены</p>
                            <p>Политика конфиденциальности</p>
                            <p>Публичная оферта</p>
                        </div>
                    </div>
                    <Navigation />
                </section>
                <section>
                    <p className={styles.telephone}>+7 (495) 823-54-12</p>
                    <p className={styles.email}>hello@womazing.com</p>
                    <div className={styles.socials}>
                        <img src={instagram} alt="instagram" className={styles.instagram} />
                        <img src={facebook} alt="facebook" className={styles.facebook} />
                        <img src={twiter} alt="twiter" className={styles.twiter} />
                    </div>
                    <div className={styles.visa}>
                        <img src={visa} alt="visa" />
                    </div>
                </section>
            </footer>
        </div>
    );
};


export default Footer;