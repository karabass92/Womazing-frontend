import { useEffect } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import styles from './Shop.module.scss';
import { getAllProducts, selectShop } from '../../store/shopSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';


const Shop = () => {
    
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectShop)

    useEffect( ()=> {
        dispatch(getAllProducts())
    }, [])

    return (
        <main className={styles.main}>
            <BreadCrumbs header='Магазин' />
        </main>
    );
};


export default Shop;