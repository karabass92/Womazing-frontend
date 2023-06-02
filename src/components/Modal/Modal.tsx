import { Fragment } from 'react';
import styles from './Modal.module.scss';
import close from '../../assets/img/modal/close.svg';


type Props = {
    modalIsOpen: boolean,
    setModalIsOpen: Function
};


const Modal = ({
    modalIsOpen,
    setModalIsOpen
}: Props) => {
    return (
        <Fragment>
            <div 
                className={`${styles.overlay} ${modalIsOpen && styles.visible}`} 
                onClick={() => setModalIsOpen(false)}></div>
            <div className={`${styles.modal} ${modalIsOpen && styles.visible}`}>
                <img src={close} alt="close" onClick={() => setModalIsOpen(false)} />
                <h2>Заказать обратный звонок</h2>
                <form action="#">
                    <input type="text" placeholder="Имя" />
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Телефон" />
                    <button>Заказать звонок</button>
                </form>
            </div>
        </Fragment>
    );
};


export default Modal;