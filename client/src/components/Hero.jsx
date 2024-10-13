import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Trusted <br />
          Healthcare Management System

        </h1>
        <p>
        Welcome to HealthBooker, the ultimate solution for managing your healthcare needs. Our platform is designed to connect patients with top healthcare professionals seamlessly and efficiently. With HealthBooker, you can easily book appointments, access a wide range of specialists, and manage your medical records all in one place.
            
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
