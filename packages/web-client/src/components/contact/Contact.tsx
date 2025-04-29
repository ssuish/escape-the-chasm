import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.header}>
                <h1>Social Media</h1>

                <div className={styles.socials}>
                    <iframe className={styles.fb} src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61573907524618&tabs=timeline&width=500&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                        scrolling="no" frameBorder="0"
                        allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                    </iframe>
                    
                    <a href='https://x.com/EscapeTheChasm' target='_blank'>Twitter</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;