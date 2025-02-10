import React from 'react';
import Navbar from '../_components/navbar';
import Footer from '../_components/footer';
import HeadingMain from '../_components/headingMain';
import HeroSection from '../_components/hero-section';

const products = [
  {
    name: 'FOOD GRADE GUAR GUM',
    description:
      'Guar Gum, also called guaran, is a substance made from guar beans which has thickening and stabilizing properties useful in various industries, traditionally the food industry. Guar gum is used in dairy products like ice cream and yogurt, and also in baked goods and sauces.',
    image: 'https://storage.googleapis.com/a1aa/image/9e32H7AbCriwlVtgb3o2xzoUywIP9qycXNON-XRRoHE.jpg',
    alt: 'A bowl of food grade guar gum powder',
  },
  {
    name: 'INDUSTRIAL GRADE GUAR GUM',
    description:
      'Guar gum is a white to creamy colored, free-flowing powder, and free from extraneous matter. It is used as a natural thickener, emulsifier, stabilizer, and bonding agent in industries like textile, paper, explosives, and oil drilling.',
    image: 'https://storage.googleapis.com/a1aa/image/I_Drm4rPcW56nGQeGfHzKFJeaRURvOPGIjo4PamHbRk.jpg',
    alt: 'A bowl of industrial grade guar gum powder',
  },
  {
    name: 'CASSIA GUM POWDER (E-427 FOOD)',
    description:
      'Cassia Gum Powder is the purified flour from the endosperm of Cassia tora seeds. It is used as a thickener, emulsifier, foam stabilizer, and moisture-retaining agent in various food products.',
    image: 'https://storage.googleapis.com/a1aa/image/bXiBvPhSi26EDZ7z1KaJNaqUgRJFid9zNpgYH8K8Ta4.jpg',
    alt: 'A bowl of cassia gum powder (E-427 food)',
  },
  {
    name: 'CASSIA GUM POWDER (E-499 PET FEED)',
    description:
      'Cassia tora powder is made from cassia tora seeds and cassia tora splits, which have been used for years. In India, cassia tora is used as a natural pesticide in organic farms.',
    image: 'https://storage.googleapis.com/a1aa/image/w47lm2GldDWENgVTHIt1vTkQ4lLS01ZZkwE2-E7RrAw.jpg',
    alt: 'A bowl of cassia gum powder (E-499 pet feed)',
  },
  {
    name: 'GUAR SPLITS (PURITY 93%)',
    description:
      'Guar Gum Split is refined endosperm derived from guar seed or cluster bean. It is mechanically separated from the guar seed and is used in producing guar gum powder.',
    image: 'https://storage.googleapis.com/a1aa/image/guar_splits_93.jpg',
    alt: 'A bowl of guar splits (purity 93%)',
  },
  {
    name: 'GUAR SPLITS (PURITY 95%)',
    description:
      'Guar Gum Refined Split (Endosperm) is mechanically separated from guar seed. Guar beans are harvested and dried after the growing season before being processed.',
    image: 'https://storage.googleapis.com/a1aa/image/guar_splits_95.jpg',
    alt: 'A bowl of guar splits (purity 95%)',
  },
  {
    name: 'GUAR SPLITS (PURITY 98%)',
    description:
      'Guar Gum Split is manufactured from Guar seeds and refined to different purity levels as per buyer requirements. It is commonly used in food and pharmaceutical industries.',
    image: 'https://storage.googleapis.com/a1aa/image/guar_splits_98.jpg',
    alt: 'A bowl of guar splits (purity 98%)',
  },
  {
    name: 'FOOD GRADE TAMARIND POWDER',
    description:
      'Tamarind is the fruit of a large tropical tree grown in forests, orchards, and as an avenue tree along the roads. It is mainly planted in South India and used in food applications.',
    image: 'https://storage.googleapis.com/a1aa/image/tamarind_powder_food.jpg',
    alt: 'A bowl of food-grade tamarind powder',
  },
  {
    name: 'TEXTILE GRADE TAMARIND POWDER',
    description:
      'Tamarind Kernel Powder is one of the natural hydrocolloids used in the textile industry for sizing, printing, and finishing of fabrics.',
    image: 'https://storage.googleapis.com/a1aa/image/tamarind_powder_textile.jpg',
    alt: 'A bowl of textile-grade tamarind powder',
  },
];

const Page = () => {
  return (
    <div>
        <Navbar />
        <HeroSection name={'Products'} img="" />
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
    <Footer />
    </div>
  );
};

export default Page;
