import { useState } from 'react';
import styles from './Footer.module.css';
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const Footer = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add(styles.activemodal)
    } else {
        document.body.classList.remove(styles.activemodal)
    }

    return (
        <>
            <div className={styles.footer}>
                <img className={styles.logo} src='../src/assets/TestLogo.png'></img>
                <div className={styles.user}>
                    <p>Privacy</p>
                    <p>User Agreement</p>
                    <p onClick={toggleModal}>Contact Us</p>
                    <p>Help Center</p>
                </div>
                <p className={styles.copyright}><FaRegCopyright /><span>Escapicism. All Right Reserved</span></p>
            </div>

            {modal && (
            <div className={styles.modal}>
                <div className={styles.overlay}>
                    <div className={styles.modalcontent}>
                        <h2>Contact us here!</h2>
                        <form className={styles.form}>
                            <input type='email' className={styles.email} id="email" placeholder='Email (e.g. yourname@email.com)' required/>
                            <input type='text' className={styles.subject}id="subject" placeholder='Subject' required/>
                            <textarea wrap='hard' id="description" className={styles.desc}placeholder='Enter your description' required/>
                            <button className={styles.submit}>Submit</button>
                        </form>
                        
                        <div className={styles.socials}>
                            <h2>Follow our socials!</h2>
                            <div className={styles.icons}>
                                <a href="https://www.facebook.com/profile.php?id=61573907524618" target='_blank'><FaFacebook size={50}/></a> 
                                <a href="https://x.com/EscapeTheChasm" target='_blank'><BsTwitterX size={50}/></a>
                                <button className={styles.closemodal} onClick={toggleModal}><IoMdClose size={30}/></button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            )}
            
        </>
        
    )
}

export default Footer;