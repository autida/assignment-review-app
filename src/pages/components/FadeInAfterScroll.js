import React, { useEffect, useRef, useState } from "react";

const FadeInAfterScroll = () => {
  const fadeInRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    // <div
    //   className={`fade-in-element ${isVisible ? "fade-in-visible" : ""}`}
    //   ref={fadeInRef}
    // >
    //   tla;sdjfl;ksadjfl;ksa
    // </div>
    <div className="card-container">
      <div
        className={` fade-in-element ${
          isVisible ? "card fade-in-visible" : ""
        }`}
        ref={fadeInRef}
      >
        <div className="card-header">
          <h2 className="card-title">What is ARA?</h2>
        </div>
        <div className="card-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="card-button">Read more</button>
        </div>
      </div>
      <div
        className={` fade-in-element ${
          isVisible ? "card fade-in-visible" : ""
        }`}
        ref={fadeInRef}
        id="element2"
      >
        <div className="card-header">
          <h2 className="card-title">Why use ARA?</h2>
        </div>
        <div className="card-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="card-button">Read more</button>
        </div>
      </div>
      <div
        className={` card fade-in-element ${
          isVisible ? "card fade-in-visible" : ""
        }`}
        ref={fadeInRef}
        id="element3"
      >
        <div className="card-header">
          <h2 className="card-title">Benefits of ARA?</h2>
        </div>
        <div className="card-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="card-button">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default FadeInAfterScroll;
