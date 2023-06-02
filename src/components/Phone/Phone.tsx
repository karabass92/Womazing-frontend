import styles from './Phone.module.scss';
import telephone from '../../assets/img/phone/telephone.svg';
import telephoneSmallWave from '../../assets/img/phone/telephoneWaveSmallr.svg';
import telephoneBigWave from '../../assets/img/phone/telephoneWaveBig.svg';


type Props = {
    setModalIsOpen: Function
};


const Phone = ({
    setModalIsOpen
}: Props) => {
    return (
        <button className={styles.telephoneContainer} onClick={() => setModalIsOpen(true)}>
            <img src={telephone} alt="telephone" className={styles.telephone} />
            <img src={telephoneSmallWave} alt="telephone" className={styles.telephoneSmallWave} />
            <img src={telephoneBigWave} alt="telephone" className={styles.telephoneBigWave} />
        </button>
    );
};


export default Phone;