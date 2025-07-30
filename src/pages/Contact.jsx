import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, feel free to reach out!</p>
      
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;