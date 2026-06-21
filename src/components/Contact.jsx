import { useState } from 'react';
import BackgroundMarquee from './BackgroundMarquee';
import { portfolioData } from '../data/portfolioData';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!portfolioData.formEndpoint) {
      alert(
        'Set your form endpoint in src/data/portfolioData.js (Formspree) or deploy to Netlify for form handling.',
      );
      return;
    }

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(portfolioData.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) throw new Error('Form submission failed');
      setSubmitted(true);
    } catch (error) {
      alert('Oops! There was an error submitting the form.');
      console.error(error);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <BackgroundMarquee text="Contact Me" />

      <div className="contact-container">
        <div className="contact-form-wrapper">
          <h2>Let&apos;s Talk</h2>
          <p className="form-subtitle">
            Have a project in mind or just want to say hi?
          </p>

          {submitted ? (
            <div className="success-message">
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className="contact-form" name="contact" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="How can I help you?"
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="contact-socials-wrapper">
          <div className="cubic-social-card">
            <h3>Connect</h3>
            <div className="social-cube-grid">
              {portfolioData.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={link.className}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={link.icon} alt={link.label} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
