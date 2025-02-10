import React from 'react';
import HeadingMain from './headingMain';

const products = [
  {
    name: 'FOOD GRADE GUAR GUM',
    description:
      'Guar gum, also called guaran, is a substance made from guar beans which has thickening and stabilizing properties useful in various industries, traditionally the food industry, but increasingly the hydraulic fracturing industry. The guar seeds are dehusked, milled and screened to obtain the guar gum.',
    image: 'https://storage.googleapis.com/a1aa/image/9e32H7AbCriwlVtgb3o2xzoUywIP9qycXNON-XRRoHE.jpg',
    alt: 'A bowl of food grade guar gum powder',
  },
  {
    name: 'INDUSTRIAL GRADE GUAR GUM',
    description:
      'Guar gum is a white to creamy coloured, free flowing powder and free from extraneous matter. It is used as a Natural thickener, Emulsifier, Stabiliser, Bonding agent, Hydrocolloids, Gelling agent, Soil Stabilizer, Natural fiber, Flocculant, Fracturing agent, etc.',
    image: 'https://storage.googleapis.com/a1aa/image/I_Drm4rPcW56nGQeGfHzKFJeaRURvOPGIjo4PamHbRk.jpg',
    alt: 'A bowl of industrial grade guar gum powder',
  },
  {
    name: 'CASSIA GUM POWDER (E-427 FOOD)',
    description:
      'Cassia Gum Powder is the purified flour from the endosperm of the seeds of Cassia tora. The intended use of Cassia gum is as thickener, emulsifier, foam stabilizer, moisture retention agent, and texturizing agent in various food applications.',
    image: 'https://storage.googleapis.com/a1aa/image/bXiBvPhSi26EDZ7z1KaJNaqUgRJFid9zNpgYH8K8Ta4.jpg',
    alt: 'A bowl of cassia gum powder (E-427 food)',
  },
  {
    name: 'CASSIA GUM POWDER (E-499 PET FEED)',
    description:
      'Cassia tora powder made from cassia tora seeds and cassia tora splits are some ancient natural ingredients. In India, cassia tora is used as a natural thickener, emulsifier, and stabilizer in pet food and animal feed.',
    image: 'https://storage.googleapis.com/a1aa/image/w47lm2GldDWENgVTHIt1vTkQ4lLS01ZZkwE2-E7RrAw.jpg',
    alt: 'A bowl of cassia gum powder (E-499 pet feed)',
  },
];

const HomeProducts = () => {
  return (
    <section className="my-10">
      <div className="max-w-6xl mx-auto max-md:px-6">
        <HeadingMain name={'OUR PRODUCTS'} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 items-center bg-white shadow-lg rounded-lg p-4"
            >
              <img
                alt={product.alt}
                className="w-auto h-full object-cover border-2 border-green-500 rounded-lg"
                src={product.image}
              />
              <div className="mt-4 md:mt-0 md:ml-4">
                <h2 className="text-primary-main font-bold text-base max-md:text-center w-full">{product.name}</h2>
                <p className="text-gray-700 mt-2 text-justify text-sm leading-8">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
