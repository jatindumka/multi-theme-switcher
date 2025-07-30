// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>About This App</h1>
      <p>
        The Multi-Theme Switcher App is built using React and Vite,
        designed to explore dynamic theme switching with clean routing and responsive design.
      </p>
      <p>
        It supports multiple themes, stores preferences in localStorage,
        and demonstrates modular component structure with maintainable styling.
      </p>
    </div>
  );
};

export default About;