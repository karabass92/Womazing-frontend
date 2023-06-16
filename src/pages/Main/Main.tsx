import styles from './Main.module.scss';

import important1 from '../../assets/img/main-page/important_1.png';
import important2 from '../../assets/img/main-page/important_2.png';
import important3 from '../../assets/img/main-page/important_3.png';


const Main = () => {
    return (
        <main className={styles.main}>
            <section>slider</section>
            <section>new collection</section>
            <h2>Что для нас важно</h2>
            <section className={styles.importantBlock}>
                <article className={styles.importantItem}>
                    <div>
                        <img src={important1} alt="img" />
                    </div>
                    <h3>Качество</h3>
                    <p>
                        Наши профессионалы работают на лучшем оборудовании для пошива одежды
                        беспрецедентного качества
                    </p>
                </article>
                <article className={styles.importantItem}>
                    <div>
                        <img src={important2} alt='img' />
                    </div>
                    <h3>Скорость</h3>
                    <p>
                        Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц
                        продукции в наших собственных цехах
                    </p>
                </article>
                <article className={styles.importantItem}>
                    <div>
                        <img src={important3} alt="img" />
                    </div>
                    <h3>Ответственность</h3>
                    <p>
                        Мы заботимся о людях и планете. Безотходное производство и комфортные
                        условия труда - все это Womazing
                    </p>
                </article>
            </section>
            <section>dreamteam</section>
        </main>
    );
};


export default Main;