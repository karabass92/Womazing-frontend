import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getProduct, selectProduct } from '../../store/productSlice';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import styles from './Product.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { staticUrl } from '../../constants/api';


const Product = () => {

    const dispatch = useAppDispatch();
    const product = useAppSelector(selectProduct);
    const [productCount, setProductCount] = useState(1);
    const [productSize, setProductSize] = useState('S');
    const [productIsAddedToBasket, setProductIsAddedToBasket] = useState(false);

    let { productId } = useParams();
    //const count = useRef(productCount);

    useEffect( () => {
        dispatch(getProduct(String(productId)))
    }, [productId, dispatch])



    const onAddProductClick = () => {
    
    };


    if (!product) {
        return (
            <h1>loading</h1>
        )
    }

    return (
        <main className={styles.main}>
            <BreadCrumbs header={`${product.name}`} />
            <section className={styles.productInfoContainer}>
                <img src={staticUrl + product.img} alt={product.img} className={styles.productImg} />
                <div>
                    <span className={styles.productPrice}>
                        ${product.price}
                    </span>
                    <h3 className={styles.chooseSize}>Выберите размер</h3>
                    <input type="radio" name="size" id="sSize"
                        checked={productSize === 'S'}
                        onClick={() => setProductSize('S')}
                        className={`${styles.sizeRadioButton} ${styles.sSize}`} />
                    <label htmlFor="sSize"></label>
                    <input type="radio" name="size" id="mSize"
                        checked={productSize === 'M'}
                        onClick={() => setProductSize('M')}
                        className={`${styles.sizeRadioButton} ${styles.mSize}`} />
                    <label htmlFor="mSize"></label>
                    <input type="radio" name="size" id="lSize"
                        checked={productSize === 'L'}
                        onClick={() => setProductSize('L')}
                        className={`${styles.sizeRadioButton} ${styles.lSize}`} />
                    <label htmlFor="lSize"></label>
                    <input type="radio" name="size" id="xlSize"
                        checked={productSize === 'XL'}
                        onClick={() => setProductSize('XL')}
                        className={`${styles.sizeRadioButton} ${styles.xlSize}`} />
                    <label htmlFor="xlSize"></label>
                    <div className={styles.addProductToBasketButtonContainer}>
                        <input 
                            type="number" 
                            className={styles.productCount} 
                            value={productCount} 
                            onChange={() => setProductCount(1)} />
                        <button className={styles.formButton}
                            onClick={() => onAddProductClick()}>
                            Добавить в корзину
                        </button>
                    </div>
                    <div
                        className={`${productIsAddedToBasket
                            ? styles.ifProductIsAdded
                            : styles.ifProductIsNotAdded}`}>
                        <p className={styles.productAddedMessage}>Товар добавлен в корзину</p>
                        <NavLink to='/shop' className={styles.continueShoping}>
                            <div>
                                Продолжить покупки
                            </div>
                        </NavLink>
                    </div>
                </div>
            </section>
        </main>
    );
};


export default Product;