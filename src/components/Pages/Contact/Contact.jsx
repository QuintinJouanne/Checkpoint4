import React, { useRef, useState } from 'react';
import styles from './Contact.module.scss';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../navbar/Navbar';

function Contact() {
  const [nom, setNom] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ur2unsg',
      'template_qmndapl',
      form.current,
      'LUkkrnEokq7WOCVgn'
    );
    setNom('');
    setEmail('');
    setMessage('');
    toast('Votre message a bien été envoyé', {
      theme: 'light',
      type: 'success',
    });
  };

  return (
    <section id="contact">
      <Navbar />
      <div className={styles.test}>
        <h2 className={styles.title}>Contactez nous</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Votre Nom"
            required
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Votre E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className={styles.textArea}
            name="message"
            rows="7"
            placeholder="Votre message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className={styles.validate_btn}>
            Envoyer votre message
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Contact;
