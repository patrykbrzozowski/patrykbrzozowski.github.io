import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <h2>KONTAKT</h2>
        <div className="text">
          Imię: <span>Patryk</span>
        </div>
        <div className="text">
          Nazwisko: <span>Brzozowski</span>
        </div>
        <div className="text">
          Adres email: <span>patrykbrzozula@gmail.com</span>
        </div>
        <div className="text">
          Miejsce zamieszkania: <span>Warszawa</span>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
