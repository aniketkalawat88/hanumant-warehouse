import React from 'react';

const AboutComp = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:px-0 text-justify">
      {/* About Us Section */}
      <p className="mb-4 text-sm sm:text-xl">
        <strong>HANUMANT Warehouse</strong> is a trusted name in the 
        agricultural industry, specializing in the supply and export of high-quality 
        <strong className="text-primary-main"> Guar products, spices, and agricultural commodities.</strong> 
        Located in <strong>Merta City</strong>, India’s largest raw material mandi, we ensure 
        premium quality and timely delivery to our global clients.
      </p>

      <p className="mb-4 text-sm sm:text-xl">
        Our product range includes:
        <strong className="text-primary-main">
          Guar Refined Dall, Guar Roasted Korma, Guar Churi, Cumin Seed, Dill Seed, 
          Psyllium Husk, Fennel Seed, and Fenugreek Seed.
        </strong>
      </p>

      {/* Industrial & Agricultural Applications */}
      <p className="mb-4 text-sm sm:text-xl">
        Our products cater to various industries, including:
        <strong> Food Processing, Pharmaceuticals, Animal Feed, and Industrial Applications.</strong>
        The guar and spice-based products we offer are used in food-grade applications, 
        cattle feed, and industrial purposes like textile printing and oil drilling.
      </p>

      {/* Quality Policy */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-12 mb-6 text-primary-main">
        QUALITY POLICY
      </h2>
      <p className="mb-4 text-sm sm:text-xl">
        Quality is at the core of HANUMANT Warehouse. We have a robust quality control 
        system in place to ensure that all our products meet international standards. 
        Our processing units follow stringent hygiene protocols, ensuring that every batch 
        meets the highest purity levels. Our team continuously monitors the production 
        process, from raw material procurement to final packaging.
      </p>

      {/* Our Team */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-12 mb-6 text-primary-main">
        OUR TEAM
      </h2>
      <p className="mb-4 text-sm sm:text-xl">
        We have a dedicated team of professionals with expertise in:
      </p>
      <ul className="list-disc list-inside text-sm sm:text-base">
        <li>Agricultural product sourcing & quality assurance</li>
        <li>Packaging & logistics</li>
        <li>International trade & export management</li>
        <li>Sales & customer support</li>
      </ul>

      {/* Client Satisfaction */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-12 mb-6 text-primary-main">
        CLIENT SATISFACTION
      </h2>
      <p className="mb-4 text-sm sm:text-xl">
        Our commitment to customer satisfaction is reflected in our business practices. 
        We ensure customized packaging solutions, timely deliveries, and competitive 
        pricing. We maintain long-term relationships with our clients by providing 
        consistent product quality and reliable service. Our customer-first approach 
        has helped us build a strong global clientele.
      </p>

      {/* Why Us */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-12 mb-6 text-primary-main">
        WHY CHOOSE US?
      </h2>
      <p className="mb-4 text-sm sm:text-xl">
        Our strong industry presence and commitment to quality make us a preferred 
        choice for bulk agricultural supplies. Here’s why clients trust HANUMANT Warehouse:
      </p>
      <ul className="list-disc list-inside text-sm sm:text-base">
        <li>Located in Merta City, India's largest raw material mandi</li>
        <li>Guaranteed premium quality and purity</li>
        <li>Advanced processing & packaging facilities</li>
        <li>Competitive pricing & bulk supply availability</li>
        <li>On-time delivery and excellent customer support</li>
      </ul>
    </div>
  );
};

export default AboutComp;
