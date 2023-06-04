import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import YandexMap from '../../components/YandexMap/YandexMap';
import styles from './Contacts.module.scss';


const Contacts = () => {
    return (
        <main className={styles.main}>
            <BreadCrumbs header='Контакты' />
            <YandexMap />
        </main>
    );
};


export default Contacts;