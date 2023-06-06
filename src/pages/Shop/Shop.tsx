import { useEffect, useState, useCallback } from 'react';
import { getAllProducts, selectShop } from '../../store/shopSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Shop.module.scss';


const Shop = () => {
    
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectShop);
    const [type, setType] = useState(null);
    const [page, setPage] = useState(1);

    const productsPerPage = 6;
    const lastIndex = page * productsPerPage;
    const startIndex = lastIndex - productsPerPage;

    useEffect( ()=> {
        dispatch(getAllProducts())
    }, []);
 
    const filteredProducts = products
        .filter(product => 
            product.type === (type ?? product.type));
    
    const productsOnPage = filteredProducts.slice(startIndex, lastIndex);

    const showProducts = productsOnPage
    .map(product => <ProductCard
        key={product.id}
        id={product.id}
        productImg={product.img}
        productName={product.name}
        productPrice={product.price} />);

    let pagesCount = Math.ceil(filteredProducts.length / productsPerPage);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return (
        <main className={styles.main}>
            <BreadCrumbs header='Магазин' />

            <div className={styles.countOfShownProducts}>
                Показано: {showProducts.length} из {filteredProducts.length} товаров
            </div>

            <div className={styles.productsContainer}>
                {showProducts}
            </div>

            <div className={styles.countOfShownProducts}>
                Показано: {showProducts.length} из {filteredProducts.length} товаров
            </div>

            <div className={styles.paginationBlock}>
                {pages.map((p) => {
                    return (
                        <button 
                            className={`${styles.paginationButton} ${p === page && styles.activePaginationButton}` } 
                            onClick={ () => setPage(p)}
                            key={p}>
                                {p}
                        </button>
                    )
                })}
            </div>
        </main>
    );
};


export default Shop;