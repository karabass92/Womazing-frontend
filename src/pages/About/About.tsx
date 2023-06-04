import styles from './About.module.scss';
import firstPhoto from '../../assets/img/about-page/sonnie_hiles.jpg';
import secondPhoto from '../../assets/img/about-page/barkz.jpg';
import LinkButton from '../../components/Buttons/LinkButton/LinkButton';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';


const About = () => {
    return (
        <main className={styles.main}>
            <BreadCrumbs header='О бренде' />
            <section className={styles.section}>
                <img src={firstPhoto} alt='sonnie hiles' />
                <article>
                    <h3>Идея и женщина</h3>
                    <p>
                        Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны.
                        Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из
                        членов семьи не является модельером.
                    </p>
                    <p>
                        Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания
                        своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма
                        дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний.
                    </p>
                </article>
            </section>
            <section className={styles.section}>
                <article>
                    <h3>Магия в деталях</h3>
                    <p>
                        Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году.
                        Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских
                        моделей.
                    </p>
                    <p>
                        Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была
                        тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать
                        основала профессиональную школу кроя и шитья). Стремление производить одежду для
                        масс несло в себе большие перспективы, особенно в то время, когда высокая мода
                        по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало.
                    </p>
                </article>
                <img src={secondPhoto} alt='barkz' />
            </section>
            <div className={styles.btnContainer}>
                <LinkButton width={260} height={68} text='Перейти в магазин' link='/shop' />
            </div>
        </main>
    )
};


export default About;