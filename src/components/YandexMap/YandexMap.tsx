import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import mapData from '../../constants/mapData';
import styles from './YandexMap.module.scss';


const YandexMap = () => {
    return (
        <div className={styles.mapContainer}>
            <YMaps>
                <Map defaultState={mapData} className={styles.map}>
                    <Placemark geometry={[55.576569, 37.116807]} />
                </Map>
            </YMaps>
        </div>
    );
};


export default YandexMap;