import styles from './BreadCrumbs.module.scss';
import { Link } from 'react-router-dom'


type Props = {
    header: string,
};


const BreadCrumbs = ({
    header,
}: Props) => {
    return (
        <div className={styles.breadCrumbs}>
            <h1>{header}</h1>
            <div className={styles.path}>
                <Link to={'/'}>Главная</Link> — <span>{header}</span>
            </div>
        </div>
    );
};


export default BreadCrumbs;