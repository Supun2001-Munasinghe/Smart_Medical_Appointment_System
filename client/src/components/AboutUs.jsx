import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Our mission is to simplify the healthcare experience for both patients and providers. By leveraging cutting-edge technology and a user-friendly interface, we aim to improve the quality of healthcare services and make them more accessible to everyone. Whether you need a routine check-up or specialized care, HealthBooker is here to support your health journey.
           
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
