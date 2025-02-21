import React from 'react';
import HeadingMain from './headingMain';
import Link from 'next/link';

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
const arr = [
  { icon: "fa-shield-alt", title: "Trust & Reliability" },
  { icon: "fa-gem", title: "Premium Quality Products" },
  { icon: "fa-cogs", title: "Advanced Processing Technology" },
  { icon: "fa-users", title: "Experienced Team" },
  { icon: "fa-map-marker-alt", title: "Strategic Location" },
  { icon: "fa-certificate", title: "Quality Assurance & Certification" },
]

const HomeFeature = () => {
  return (
<section className="bg-secondary-main/10 py-16">
  <div className="max-w-7xl mx-auto text-center max-md:px-6">
    {/* Title Section */}
    <HeadingMain name="Our Features" />
    <p className="text-lg text-primary-main max-w-2xl mx-auto mb-12">
      Lorem ipsum dolor sit amet consectetur. Tempus nec sit morbi diam.
      Faucibus netus mauris.
    </p>

    {/* Feature Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {arr.map((feature, index) => (
        <div
          key={index}
          className="bg-heaing-main p-6 sm:p-8 rounded-lg shadow-md"
        >
          <i
            className={`fas ${feature.icon} text-secondary-main text-5xl mb-4`}
          ></i>
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary-main">
            {feature.title}
          </h3>
          <p className="text-color-main text-sm sm:text-base">
            Mauris varius ut a sed consectetur in the adipiscing elit. Nam
            tincidunt, sapien eget vehicula viverra.
          </p>
        </div>
      ))}
    </div>

    {/* Contact Button */}
    <div className="mt-12">
      <Link
        className="bg-primary-main text-heaing-main text-lg font-semibold py-3 px-6 rounded-full hover:bg-secondary-main transition-all duration-300"
        href="/blogs"
      >
        Our Blogs
      </Link>
    </div>
  </div>
</section>


  );
};

export default HomeFeature;
