import React from 'react'
import ContactForm from './contact-form'

const ContactComp = () => {
  return (
    <div>
  {/* Contact Information */}
  <section className="max-w-7xl mx-auto py-8 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white shadow-lg p-6 text-center">
      <i className="fas fa-map-marker-alt text-green-600 text-4xl mb-4"></i>
      <h2 className="text-xl font-bold">Head Office</h2>
      <p>H 21 to 24, Industrial Area, Barmer, Rajasthan, (India).</p>
      {/* <div className="flex justify-center space-x-4 mt-4">
        <a className="text-blue-600" href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a className="text-blue-600" href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="text-blue-600" href="#">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a className="text-blue-600" href="#">
          <i className="fab fa-pinterest"></i>
        </a>
      </div> */}
    </div>
    <div className="bg-white shadow-lg p-6 text-center">
      <i className="fas fa-map-marker-alt text-green-600 text-4xl mb-4"></i>
      <h2 className="text-xl font-bold">Manufacturing Plant</h2>
      <p>Raipur(Chhattisgarh)</p>
      <p>Gandhidham(Gujarat)</p>
      <p>Ahmedabad(Gujarat)</p>
    </div>
    <div className="bg-white shadow-lg p-6">
      <h2 className="text-xl font-bold text-center w-full">Contact Us</h2>
      <p>General Inquiries</p>
      <p>
        Email:
        <a className="text-blue-600" href="mailto:info@maheshagro.com">
          info@maheshagro.com
        </a>
      </p>
      <p>
        Phone:
        <a className="text-blue-600" href="tel:+919411106883">
          (+91)-9411-106883
        </a>
      </p>
      <p>
        Landline:
        <a className="text-blue-600" href="tel:+912982220841">
          (+91) (2982)-220841, 222775
        </a>
      </p>
      <p>
        Fax:
        <a className="text-blue-600" href="tel:+912982220841">
          (+91) (2982)-220841, 222775
        </a>
      </p>
 
    </div>
  </section>
  {/* Contact Form */}
  <ContactForm />
  {/* Map Section */}
  <section className="container mx-auto py-8 px-6">
    <img
      alt="Map showing location of Mahesh Agro Food Industries"
      className="w-full h-96 object-cover"
      height={400}
      src="https://storage.googleapis.com/a1aa/image/075zfAq73ux76yxnyZ95JfToJEgsaUwRmxTEihj3WO4.jpg"
      width={1920}
    />
  </section>
</div>

  )
}

export default ContactComp