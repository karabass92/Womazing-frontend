import { useEffect } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import styles from './Shop.module.scss';
import { getAllProducts } from '../../store/shopSlice';


const Shop = () => {
    
    useEffect( ()=> {
        getAllProducts();
    })

    return (
        <main className={styles.main}>
            <BreadCrumbs header='Магазин' />
        </main>
    );
};


export default Shop;