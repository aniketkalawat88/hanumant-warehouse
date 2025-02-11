import React from 'react';
import HeadingMain from './headingMain';

const features = [
  {
    icon: 'fas fa-handshake text-green-500',
    title: 'TRUST & RELIABILITY',
    description:
      'HANUMANT Warehouse is known for its integrity and long-standing relationships with clients. We ensure fair business practices and deliver consistent quality in every order.',
  },
  {
    icon: 'fas fa-seedling text-orange-500',
    title: 'PREMIUM QUALITY PRODUCTS',
    description:
      'We supply only the best quality Guar products, spices, and agricultural commodities. Our strict quality control measures ensure purity and freshness.',
  },
  {
    icon: 'fas fa-industry text-yellow-500',
    title: 'ADVANCED PROCESSING TECHNOLOGY',
    description:
      'Our warehouse and processing units use modern technology to enhance efficiency, ensuring top-grade products for domestic and international markets.',
  },
  {
    icon: 'fas fa-users text-gray-500',
    title: 'EXPERIENCED TEAM',
    description:
      'With years of expertise in the industry, our team ensures smooth operations, from sourcing raw materials to final product delivery.',
  },
  {
    icon: 'fas fa-map-marker-alt text-green-500',
    title: 'STRATEGIC LOCATION',
    description:
      'Located in Merta City, India’s largest raw material mandi, we have access to premium-quality crops at competitive prices, ensuring cost-effective solutions for our buyers.',
  },
  {
    icon: 'fas fa-certificate text-blue-500',
    title: 'QUALITY ASSURANCE & CERTIFICATION',
    description:
      'We follow international standards for quality assurance and have certifications to ensure our products meet global market requirements.',
  },
];

const HomeFeature = () => {
  return (
    <div className="px-4 md:py-20 py-10 bg-gray-100">
      <HeadingMain name={'OUR FEATURES'} />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:mt-20 mt-10">
        {features.map((feature, index) => (
          <div key={index} className="p-6 rounded-lg flex items-start max-md:text-center max-sm:flex-col">
            <i className={`${feature.icon} text-4xl mr-4 max-md:mx-auto max-md:mb-6`} />
            <div>
              <h2 className="md:text-xl text-lg font-semibold mb-2">{feature.title}</h2>
              <p className="md:text-lg text-justify text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeature;
