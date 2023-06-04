import styles from './FeedbackForm.module.scss';


const FeedbackForm = () => {
    return (
        <form action="#" className={styles.sendMessageForm}>
            <input type="text" placeholder="Имя"
                className={styles.formInput} />
            <input type="email" placeholder="E-mail"
                className={styles.formInput} />
            <input type="text" placeholder="Телефон"
                className={styles.formInput} />
            <input type="textarea" placeholder="Сообщение"
                className={styles.messageTextInput} />
            <button className={styles.formButton} >
                Отправить
            </button>
        </form>
    );
};


export default FeedbackForm;