import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../pages/Contact.css";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Επαλήθευση ότι όλα τα πεδία είναι συμπληρωμένα
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Παρακαλώ συμπληρώστε όλα τα πεδία.');
      return;
    }

    // Αποστολή μέσω του EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,  // Το email του χρήστη
      message: formData.message,
    };

    emailjs.send(
      'service_tw9op62',  // Το Service ID που έχεις στο EmailJS
      'template_ve0sonb', // Το Template ID
      templateParams,     // Τα δεδομένα που θα αποσταλούν
      '5yW-676R0nXxFMjBI'      // Το User ID που έχεις στο EmailJS
    )
    .then(
      (result) => {
        console.log(result.text);
        setStatus('Το μήνυμα στάλθηκε με επιτυχία!');
      },
      (error) => {
        console.log(error.text);
        setStatus('Σφάλμα κατά την αποστολή του μηνύματος. Προσπαθήστε ξανά.');
      }
    );
  };

  return (
    <div className="contact-container">
      <style>
        {`
          /* Προσαρμοσμένο CSS */
        `}
      </style>

      <div className="contact-header">
        <h1>Επικοινωνήστε μαζί μου</h1>
        <p>Στείλτε μου ένα μήνυμα ή βρείτε με στα social media.</p>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <h3>Κινητό:</h3>
          <p>+30 698 668 0496</p>
        </div>

        <div className="contact-item">
          <h3>Email:</h3>
          <p><a href="mailto:antonhspap@icloud.com">antonhspap@icloud.com</a></p>
        </div>


      <div className="social-media">
          <h3>Social Media:</h3>
          <div className="social-links">
            <a href="https://github.com/pantoine31" target="_blank" rel="noopener noreferrer" className="social-link github">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/antonis-papakonstantinou-5316281b6/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/pantoine_/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.facebook.com/Papakwnstantinouant/" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="mailto:antonhspap@icloud.com" target="_blank" rel="noopener noreferrer" className="social-link email">
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>
    </div>
    

      {/* Φόρμα Επικοινωνίας */}
      <div className="contact-form">
        <h3>Στείλτε μου ένα μήνυμα</h3>
        <form onSubmit={handleSubmit}>
          <label>Όνομα:</label>
          <input
            type="text"
            name="name"
            placeholder="Το όνομά σας"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Το email σας"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Μήνυμα:</label>
          <textarea
            name="message"
            placeholder="Γράψτε το μήνυμά σας..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Αποστολή</button>
        </form>
        {status && <p>{status}</p>}
      </div>

    </div>
  );
};

export default Contact;
