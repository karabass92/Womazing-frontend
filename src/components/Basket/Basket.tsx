import { NavLink } from 'react-router-dom';
import styles from './Basket.module.scss';
import basket from '../../assets/img/basket/basket.svg';
import basketDot from '../../assets/img/basket/basketDot.svg';


type Props = {
    count: number
};


const Basket = ({count}: Props) => {
    return (
        <div className={styles.basketContainer}>
            <div className={count ? `${styles.productsCount}` : `${styles.hidden}`}>
                {
                    count < 10 ? count : `9+`
                }
            </div>
            <NavLink to='/cart'>
                <img src={basket} alt="basket" className={styles.basket} />
                <img src={basketDot} alt="basket" className={styles.basketLeftDot} />
                <img src={basketDot} alt="basket" className={styles.basketrightDot} />
            </NavLink>
        </div>
    );
};


export default Basket;