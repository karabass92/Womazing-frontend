import styles from './CountOfShownProducts.module.scss';


type Props = {
    showProductsCount: number,
    generalProductsCount: number
};


const CountOfShownProducts = ({
    showProductsCount,
    generalProductsCount
}: Props) => {
    return (
        <section className={styles.countOfShownProducts}>
            Показано: {showProductsCount} из {generalProductsCount} товаров
        </section>
    );
};


export default CountOfShownProducts;