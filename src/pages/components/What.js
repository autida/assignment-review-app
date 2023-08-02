import React, { useEffect, useRef, useState } from "react";

const WhatWhyBen = () => {
  const fadeInRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);

  const startAnimation = () => {
    console.log(showAnimation);
    setShowAnimation(true);
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(fadeInRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="animation-container">
      <div
        className={`left-container ${showAnimation ? "showAnimation" : ""}`}
        ref={fadeInRef}
      >
        <img src="assets/what.png" alt="What Background" className="img-what" />
      </div>
      <div
        className={`right-container ${showAnimation ? "showAnimation" : ""}`}
        ref={fadeInRef}
      >
        <h2>What is ARA?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida,
          metus ac consequat interdum, neque lectus eleifend mi, auctor faucibus
          mauris sapien id tellus. Fusce consectetur ac ex id scelerisque.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla facilisi. Proin sagittis mauris quis
          mauris efficitur consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida,
          metus ac consequat interdum, neque lectus eleifend mi, auctor faucibus
          mauris sapien id tellus. Fusce consectetur ac ex id scelerisque.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla facilisi. Proin sagittis mauris quis
          mauris efficitur consectetur.
        </p>
      </div>
    </div>
  );
};

export default WhatWhyBen;
