import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSAnimations = ({ children, animation, duration = 1200 }) => {
  useEffect(() => {
    AOS.init({ duration });
  }, [duration]);

  return (
    <div data-aos={animation}>
      {children}
    </div>
  );
};

export default AOSAnimations;