import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../css/Contact.module.css';
import homepageShapes from '../images/homepage-shapes.png';
import { NavLink }from 'react-router-dom';


export default function Contact() {
  const activeLink = ({ isActive }) => isActive ? `${styles.activeLink}` : '';
  const [active, setActive] = useState(false);
  const form = useRef();
  const [sent, setSent] = useState("notsent");

  function deActivate() {
    if (active) {
        setActive(false)
        document.body.style.overflow = "visible";
    }
}

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_uuijmxu', 'template_3hiw07p', form.current, 'u1fSQ6SkoqE4EVFIT')
      .then((result) => {
          setSent("success")
      }, (error) => {
          setSent("error")
      });
  };

  return (
      <div className="limitWidth">
        <div className={styles.addMargin}>
          <div className={styles.cover}>
            <div className={styles.coverLeft}>
              <h1 className={styles.blueText}>Sign up for</h1>
              <h1 className={styles.orangeText}><div className={active ? `${styles.linksActive}` : `${styles.links}`} onClick={deActivate}>
        <a href='https://qualtricsxmdq6yb4lzd.qualtrics.com/jfe/form/SV_8Bx6vSD8vAF5KgC' className={activeLink}>our waitlist here!</a>
      </div></h1>
              <h2>If you have any questions, concerns or simply want to say hello, please don't hesitate to reach out to us through the form provided!</h2>
            </div>
            
          </div>
          <form ref={form} onSubmit={sendEmail} className={styles.fullform}>
              <div className={styles.form}>
                <input type="text" placeholder="Name" name="from_name" required/>
                <input type="email" placeholder="Email" name="reply_to" required/>
                <textarea placeholder="Your message..." name="message" required/>
              </div>
              <input type="submit" value="send message" className={styles.submit}/>
              {sent === "success" && <p className={styles.message}>Email sent! We'll get back to you soon!</p>}
              {sent === "error" && <p className={styles.message}>Email failed to send. Please reach us at openprojectberkeley@gmail.com!</p>}
          </form>
        </div>
      </div>
  )
}