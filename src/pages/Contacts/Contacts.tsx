import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import YandexMap from '../../components/YandexMap/YandexMap';
import styles from './Contacts.module.scss';


const Contacts = () => {
    return (
        <main className={styles.main}>
            <BreadCrumbs header='Контакты' />
            <YandexMap />
            <section className={styles.contactInfo}>
                <div>
                    <h3>Телефон</h3>
                    <p>+7 (495) 823-54-12</p>
                </div>
                <div>
                    <h3>E-mail</h3>
                    <p>info@sitename.com</p>
                </div>
                <div>
                    <h3>Адрес</h3>
                    <p>г. Москва, 3-я улица Строителей, 25</p>
                </div>
            </section>
        </main>
    );
};


export default Contacts;