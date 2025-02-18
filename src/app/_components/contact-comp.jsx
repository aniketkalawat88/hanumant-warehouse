import React from "react";
import ContactForm from "./contact-form";

const ContactComp = () => {
  return (
    <div>
      {/* Contact Information */}
      <section className="max-w-7xl mx-auto py-8 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg p-6 text-center">
          <i className="fas fa-map-marker-alt text-primary-main text-4xl mb-4"></i>
          <h2 className="text-xl font-bold">Firm Name</h2>
          <p>HANUMANT Warehouse
          Kosiyanada, Merta Road Marg
          Merta City 341510
          District Nagour, Rajasthan, India</p>
        </div>
        <div className="bg-white shadow-lg p-6 text-center">
          <i className="fas fa-map-marker-alt text-primary-main text-4xl mb-4"></i>
          <h2 className="text-xl font-bold">We Deal In</h2>
          <p>
            Guar Refined Dall Guar Roasted Korma, Guar Churi, Jeera, Dillseed,
            Psyllium Husk, Fennel Seed, Cumin Seed, Fenugreek Seed
          </p>
        </div>
        <div className="bg-white shadow-lg p-6">
          <h2 className="text-xl font-bold text-center w-full">Contact Us</h2>
          <p>General Inquiries</p>
          <p>
            Email:
            <a
              className="text-primary-main"
              href="mailto:info@hanumantwarehouse.com"
            >
              info@hanumantwarehouse.com
            </a>
          </p>
          <p>
            Phone:
            <a className="text-primary-main" href="tel:+919411106883">
              (+91)-9411-106883
            </a>
          </p>
          {/* <p>
            Landline:
            <a className="text-primary-main" href="tel:+912982220841">
              (+91) (2982)-220841, 222775
            </a>
          </p> */}
          <div className="flex justify-center space-x-4 mt-4">
            <a className="text-primary-main" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-primary-main" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-primary-main" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="text-primary-main" href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <ContactForm />
      {/* Map Section */}
      <section className="container mx-auto">
        <iframe
          className="w-full h-96 border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.1639736814735!2d73.8972081149757!3d26.15662178346845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDA5JzIwLjgiTiA3M8KwNTMnNDAuMCJF!5e0!3m2!1sen!2sin!4v1633931332041!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
};

export default ContactComp;
