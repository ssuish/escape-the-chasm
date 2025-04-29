import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.header}>
                <h1>Social Media</h1>

                <a href='https://www.facebook.com/profile.php?id=61573907524618'>Facebook</a><br/>
                <a href='https://x.com/EscapeTheChasm'>Twitter</a>

            </div>
        </div>
    )
}

export default Contact;