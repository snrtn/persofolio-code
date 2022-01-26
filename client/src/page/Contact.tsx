/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import emailjs from 'emailjs-com';

import { Container } from './contact.style';

const Contact = () => {
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2cexyz4',
        'template_hxydrqp',
        e.currentTarget,
        'user_Ht0ZQATW8bDDFNz5tmbAZ',
      )
      .then(
        (result) => {
          alert('Le message a été envoyé avec succès. 👍!!');
        },
        (error) => {
          alert('not send 😤');
        },
      );
    e.currentTarget.reset();
  }
  return (
    <Container>
      <div className="contact-container">
        <div className="imgs">
          <img
            src="https://images.pexels.com/photos/10202989/pexels-photo-10202989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
        <form onSubmit={sendEmail}>
          <div className="contact-wrapper">
            <h1>Contact</h1>
            <div className="name-container">
              <label></label>
              <input type="text" autoFocus required placeholder="Prénom" name="name" />
            </div>
            <div className="email-container">
              <label></label>
              <input type="email" required placeholder="Adresse mail" name="user_email" />
            </div>

            <div className="text-container">
              <label></label>
              <textarea
                cols={50}
                rows={15}
                required
                placeholder="Laisser message"
                name="message"></textarea>
            </div>
            <div className="btn-container">
              <input type="submit" className="btn" value="Envoyer"></input>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
