import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import styles from './Product.module.scss';


type Props = {
    name: string,
}


const Product = ({
    name
}: Props) => {
    return (
        <main className={styles.main}>
            <BreadCrumbs header={name} />
            Product
        </main>
    );
};


export default Product;