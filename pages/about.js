import React, { useEffect, useState } from 'react';

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div>
      <h1
        className="text-3xl mt-5 flex justify-center mb-5"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 2s ease-in-out, transform 2s ease-out',
        }}
      >
        About Page
      </h1>
      <p
        className="flex justify-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 2s ease-in-out, transform 2s ease-out',
        }}
      >
        This is the about page of your Next.js application.
      </p>
    </div>
  );
};

export default About;
