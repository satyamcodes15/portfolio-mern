import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
   <h2>Contact Me</h2>

      {/* Email */}
      <p className="contact-text">
        📧 Email:
        <a
          href="mailto:satyamkachhi65@gmail.com?subject=Portfolio%20Inquiry"
        >
          satyamkachhi65@gmail.com
        </a>
      </p>

      {/* Phone */}
      <p className="contact-text">
        📞 Phone:
        <a href="tel:+919977817768"> +91 9977817768</a>
      </p>

      {/* Social Links */}
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/satyamkachhi/"
          target="_blank"
          rel="noreferrer"
        >
          🔗
        </a>

        <a
          href="https://www.instagram.com/satyam_1.4"
          target="_blank"
          rel="noreferrer"
        >
         📷
        </a>
<a
  href="https://wa.me/919977817768?text=Hello%20Satyam,%20I%20visited%20your%20portfolio"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-item"
>
  💻
</a>

        </div>
    </section>
  );
}

export default Contact;
