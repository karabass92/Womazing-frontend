import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import styles from './Checkout.module.scss';


const Checkout = () => {
    return (
        <main className={styles.main}>
            <BreadCrumbs header='Оформление заказа' />
        </main>
    );
};


export default Checkout;