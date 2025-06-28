import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8g88yg8',       // Replace with your actual values
      'template_j6oexfb',
      form.current,
      'cc14BAN31Ao59syBc'
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Error sending message. Check console.");
        console.error(error);
      }
    );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-info">
        <p><i className='bx bx-envelope'></i> anushkaa2704@gmail.com</p>
        <p><i className='bx bx-phone'></i> +91-9876543210</p>
        <div className="social-icons">
          <a href="https://github.com/anushkaa2704" target="_blank" rel="noreferrer"><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAFZT86gBVCRqRmfaE2i8BB_gaql6vTXlK9s&keywords=anushka%20patil&origin=RICH_QUERY_SUGGESTION&position=0&searchId=aee74a71-2348-4084-9360-4b8b167ad732&sid=ba%40&spellCorrectionEnabled=false" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin'></i></a>
          <a href="https://mail.google.com/mail/?view=cm&to=anushkaa2704@gmail.com" target="_blank" rel="noreferrer"><i className='bx bx-envelope'></i></a>
          <a href="https://t.me/yourtelegram" target="_blank" rel="noreferrer"><i className='bx bxl-telegram'></i></a>
        </div>
      </div>

      <div className="form-wrapper">
         <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
