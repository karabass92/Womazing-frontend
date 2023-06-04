import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import styles from './Contacts.module.scss';


const Contacts = () => {
    return (
        <main className={styles.main}>
            <BreadCrumbs header='Контакты' />
        </main>
    );
};


export default Contacts;