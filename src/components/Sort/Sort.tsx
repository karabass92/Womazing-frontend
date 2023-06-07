import { Fragment, useState } from 'react';
import styles from './Sort.module.scss';


type Props = {
    type: string,
    setType: Function,
    setPage: Function
}


const Sort = ({
    type,
    setPage,
    setType
}: Props) => {

    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <div className={`${styles.categoriesButton} ${(!open) || styles.sortButtonItemActive}`} 
                onClick={()=> setOpen(!open)}>
                Категории
            </div>
            <div className={`${styles.sortButtonContainer} ${!open || styles.visible}`}>
                <div className={`${styles.sortButtonItem} ${type === '' && styles.sortButtonItemActive}`}
                    onClick={() => {
                        setType('')
                        setPage(1)
                        setOpen(false)
                    }}>
                    Все
                </div>
                <div className={`${styles.sortButtonItem} ${type === 'tshirt' && styles.sortButtonItemActive}`}
                    onClick={() => {
                        setType('tshirt')
                        setPage(1)
                        setOpen(false)
                    }}>
                    Футболки
                </div>
                <div className={`${styles.sortButtonItem} ${type === 'sweetShot' && styles.sortButtonItemActive}`}
                    onClick={() => {
                        setType('sweetShot')
                        setPage(1)
                        setOpen(false)
                    }}>
                    Свитшоты
                </div>
                <div className={`${styles.sortButtonItem} ${type === 'cardigan' && styles.sortButtonItemActive}`}
                    onClick={() => {
                        setType('cardigan')
                        setPage(1)
                        setOpen(false)
                    }}>
                    Кардиганы
                </div>
                <div className={`${styles.sortButtonItem} ${type === 'smock' && styles.sortButtonItemActive}`}
                    onClick={() => {
                        setType('smock')
                        setPage(1)
                        setOpen(false)
                    }}>
                    Толстовки
                </div>
            </div>
        </Fragment>
    );
};


export default Sort;