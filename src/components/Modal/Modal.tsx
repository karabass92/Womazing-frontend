import { Fragment } from 'react';
import styles from './Modal.module.scss';
import close from '../../assets/img/modal/close.svg';


type Props = {
    isOpen: boolean,
    setOpen: Function
};


const Modal = ({
    isOpen,
    setOpen
}: Props) => {
    return (
        <Fragment>
            <div 
                className={`${styles.overlay} ${isOpen && styles.visible}`} 
                onClick={() => setOpen(false)}></div>
            <div className={`${styles.modal} ${isOpen && styles.visible}`}>
                <img src={close} alt="close" onClick={() => setOpen(false)} />
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