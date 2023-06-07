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
    return (
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
    );
};


export default Sort;