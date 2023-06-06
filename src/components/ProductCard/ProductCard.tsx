import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { staticUrl } from "../../constants/api";
import styles from './ProductCard.module.scss';
import arrow from '../../assets/img/product-card/arrow.svg';


type Props = {
    id: number,
    productImg: string,
    productName: string,
    productPrice: string
};


const ProductCard = ({
    productImg, 
    productName, 
    productPrice, 
    id}: Props) => {
    
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const navigateToProductHadler = (id:number) => {
        navigate(`../product/${id}`)
    };

    return (
        <div className={styles.productCard} >
            <div className={styles.productCardImgContainer} onMouseOver={() => setShow(true)}>
                <img src={`${staticUrl}${productImg}`} alt={productName} className={styles.productImg}/>
                <div className={`${styles.productCardImgContainerHover} ${show && styles.show}`} 
                    onClick={()=>navigateToProductHadler(id)}
                    onMouseOut={() => setShow(false)}>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
            <p className={styles.productName}>{productName}</p>
            <p className={styles.productPrice}>${productPrice}</p>
        </div>
    );
};


export default ProductCard;