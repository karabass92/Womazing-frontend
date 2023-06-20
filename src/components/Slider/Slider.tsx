import { useState } from 'react';
import styles from './Slider.module.scss';
import LinkButton from '../Buttons/LinkButton/LinkButton';


const Slider = () => {


    const [showItem1, setShowItem1] = useState(false);
    const [showItem2, setShowItem2] = useState(false);
    const [showItem3, setShowItem3] = useState(true);

    const onFirstClick = () => {
        setShowItem1(true);
        setShowItem2(false);
        setShowItem3(false);
    }

    const onSecondClick = () => {
        setShowItem1(false);
        setShowItem2(true);
        setShowItem3(false);
    }

    const onThirdClick = () => {
        setShowItem1(false);
        setShowItem2(false);
        setShowItem3(true);
    }

    return (
        <div className={styles.carouselWindow}>
            <div className={`${styles.item} ${showItem1 ? styles.itemShow : styles.itemHidden}`}>
                <h1>Что-то новенькое. Мы заждались тебя.</h1>
                <p>
                    Надоело искать себя в сером городе? Настало время новых идей,
                    свежих красок и вдохновения с Womazing!
                </p>
            </div>
            <div className={`${styles.item} ${showItem2 ? styles.itemShow : styles.itemHidden}`}>
                <h1>Включай новый сезон с WOMAZING</h1>
                <p>
                    Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров
                </p>

            </div>
            <div className={`${styles.item} ${showItem3 ? styles.itemShow : styles.itemHidden}`}>
                <h1>Новые поступления в этом сезоне</h1>
                <p>
                    Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне.
                    Время исследовать.
                </p>
            </div>
            <div className={styles.shopLinkButtonContainer}>
                <LinkButton width={243} height={68} text='Открыть магазин' link='/shop' />
            </div>
            <div className={styles.sliderToggleInfoContainer}>
                <div className={`${styles.sliderButton} ${showItem1 && styles.sliderButtonActive}`} 
                    onClick={() => { onFirstClick() }}></div>
                <div className={`${styles.sliderButton} ${showItem2 && styles.sliderButtonActive}`} 
                    onClick={() => { onSecondClick() }}></div>
                <div className={`${styles.sliderButton} ${showItem3 && styles.sliderButtonActive}`} 
                    onClick={() => { onThirdClick() }}></div>
            </div>
        </div>
    );
};


export default Slider;