import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxl7kX1J11M3n6bFHv-T3HYFvZEXCVp298gjZL5fLgim_wpEI1CkjtcmAciZiDxucGYYA/exec';
    
    try {
      const response = await fetch(scriptURL, { method: 'POST', body: formData });
      if (response.ok) {
        setSubmissionMessage('Thank you for your message! I will get back to you shortly.');
        form.reset();
      } else {
        setSubmissionMessage('There was an error submitting your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionMessage('There was an error submitting your message. Please try again later.');
    }
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h2 className="sub-title">Enquiries</h2>
            <form onSubmit={handleSubmit} name="submit-to-google-sheet">
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn">Submit</button>
            </form>
            <p>{submissionMessage}</p>
          </div>
          <div className="contact-right">
            <h2 className="sub-title">Contact Details</h2>
            <p><i className="fa-solid fa-at"></i>seangamabanou9@gmail.com</p>
            <p><i className="fa-solid fa-mobile-screen-button"></i>+27 74 714 4572</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/seang-a65aa4270"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://x.com/LeVraiSean"><i className="fa-brands fa-square-x-twitter"></i></a>
              <a href="https://www.tiktok.com/@dituaes"><i className="fa-brands fa-tiktok"></i></a>
              <a href="https://wa.me/27747144572"><i className="fa-brands fa-square-whatsapp"></i></a>
              <a href="https://www.youtube.com/channel/UCuoFjuGWOcWVCUwBiatIrrg"><i className="fa-brands fa-square-youtube"></i></a>
            </div>
          </div>
          <a href="images/my-cv.pdf" download className="btn btn2">Download CV</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

