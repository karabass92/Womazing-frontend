import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import styles from './Cart.module.scss';


const Cart = () => {
    return (
        <main className={styles.main}>
            <BreadCrumbs header='Корзина' />
        </main>
    );
};


export default Cart;