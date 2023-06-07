import styles from './Pagination.module.scss';


type Props = {
    pages:number[],
    page: number,
    setPage: Function
}


const Pagination = ({
    pages,
    page,
    setPage
}: Props) => {
    return (
        <section className={styles.paginationBlock}>
        {pages.map((p) => {
            return (
                <button 
                    className={`${styles.paginationButton} ${p === page && styles.activePaginationButton}` } 
                    onClick={ () => setPage(p)}
                    key={p}>
                        {p}
                </button>
            )
        })}
    </section>
    );
};


export default Pagination;