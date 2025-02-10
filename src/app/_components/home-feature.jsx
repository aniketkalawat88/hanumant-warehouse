import React from 'react';
import HeadingMain from './headingMain';

const features = [
  {
    icon: 'fas fa-globe-americas text-green-500',
    title: 'ETHICAL BUSINESS PRACTICES',
    description:
      'We are renowned and trusted for our reliability, irrespective of market movements such as those in 2011-12, and hence we have been a supplier of choice for multinational corporations for over 37 years.',
  },
  {
    icon: 'fas fa-apple-alt text-orange-500',
    title: 'STRINGENT QUALITY CONTROL',
    description:
      'We are committed to consistently delivering high-quality products that meet or exceed customer specifications and we have implemented a QA System that enables us to meet this objective.',
  },
  {
    icon: 'fas fa-cogs text-yellow-500',
    title: 'LATEST MANUFACTURING TECHNOLOGY',
    description:
      'The processing machineries used by our company are packed with latest technologies to high quality products.',
  },
  {
    icon: 'fas fa-user-tie text-gray-500',
    title: 'EXPERIENCED MANAGEMENT',
    description:
      'We are ably led by experienced professionals who have more than 35 years of experience in the industry.',
  },
  {
    icon: 'fas fa-map-marker-alt text-green-500',
    title: 'OPTIMAL LOCATION',
    description:
      'Our factory is strategically located near key export facilities, ensuring efficient logistics and supply chain management.',
  },
  {
    icon: 'fas fa-certificate text-blue-500',
    title: 'SGS AUDITED & CERTIFIED',
    description:
      'We are SGS audited and certified, ensuring high standards of integrity, health & safety, and business ethics.',
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
