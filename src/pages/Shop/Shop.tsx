import { useEffect, useState } from 'react';
import { getAllProducts, selectShop } from '../../store/shopSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Shop.module.scss';
import Pagination from '../../components/Pagination/Pagination';
import Sort from '../../components/Sort/Sort';
import CountOfShownProducts from '../../components/CountOfShownProducts/CountOfShownProducts';


const Shop = () => {
    
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectShop);
    const [type, setType] = useState('');
    const [page, setPage] = useState(1);

    const productsPerPage = 6;
    const lastIndex = page * productsPerPage;
    const startIndex = lastIndex - productsPerPage;

    useEffect( ()=> {
        dispatch(getAllProducts())
    }, [dispatch]);
 
    const filteredProducts = products
        .filter(product => 
            product.type === (type || product.type));
    
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
            <Sort type={type} setPage={setPage} setType={setType} />
            <CountOfShownProducts 
                showProductsCount={showProducts.length} 
                generalProductsCount={filteredProducts.length} />
            
            <section className={styles.productsContainer}>
                {showProducts}
            </section>

            <CountOfShownProducts 
                showProductsCount={showProducts.length} 
                generalProductsCount={filteredProducts.length} />
            <Pagination pages={pages} page={page} setPage={setPage} />
        </main>
    );
};


export default Shop;