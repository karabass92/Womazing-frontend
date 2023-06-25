import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProduct, selectProduct } from '../../store/productSlice';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import styles from './Product.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';


const Product = () => {

    let { productId } = useParams();
    const dispatch = useAppDispatch();
    const product = useAppSelector(selectProduct);

    
    
    useEffect( () => {
        getProduct(Number(productId))
    }, [productId])

console.log(product)
    return (
        <main className={styles.main}>
            <BreadCrumbs header={'name'} />
            Product
        </main>
    );
};


export default Product;