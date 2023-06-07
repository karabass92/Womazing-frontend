import { useEffect, useState, useCallback } from 'react';
import { getAllProducts, selectShop } from '../../store/shopSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Shop.module.scss';
import Pagination from '../../components/Pagination/Pagination';


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
    }, []);
 
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

            <div className={styles.sortButtonContainer}>
                <div className={`${styles.sortButtonItem} ${type === '' && styles.sortButtonItemActive}`}
                    onClick={() => {
                        setType('')
                        setPage(1)
                        }}>
                    Все
                </div>
                <div className={`${styles.sortButtonItem} ${type === 'tshirt' && styles.sortButtonItemActive}`}
                    onClick={() => {
                        setType('tshirt')
                        setPage(1)
                        }}>
                    Футболки
                </div>
                <div className={`${styles.sortButtonItem} ${type === 'sweetShot' && styles.sortButtonItemActive}`}
                    onClick={() => {
                        setType('sweetShot')
                        setPage(1)
                        }}>
                    Свитшоты
                </div>
                <div className={`${styles.sortButtonItem} ${type === 'cardigan' && styles.sortButtonItemActive}`}
                    onClick={() => {
                        setType('cardigan')
                        setPage(1)
                        }}>
                    Кардиганы
                </div>
                <div className={`${styles.sortButtonItem} ${type === 'smock' && styles.sortButtonItemActive}`}
                    onClick={() => {
                        setType('smock')
                        setPage(1)
                        }}>
                    Толстовки
                </div>
            </div>

            <div className={styles.countOfShownProducts}>
                Показано: {showProducts.length} из {filteredProducts.length} товаров
            </div>

            <div className={styles.productsContainer}>
                {showProducts}
            </div>

            <div className={styles.countOfShownProducts}>
                Показано: {showProducts.length} из {filteredProducts.length} товаров
            </div>

            <Pagination pages={pages} page={page} setPage={setPage} />
        </main>
    );
};


export default Shop;