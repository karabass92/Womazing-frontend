import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import styles from './Shop.module.scss';


const Shop = () => {
    return (
        <main className={styles.main}>
            <BreadCrumbs header='Магазин' />
        </main>
    );
};


export default Shop;