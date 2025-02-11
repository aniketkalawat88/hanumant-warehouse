import React from 'react';
import Navbar from '../_components/navbar';
import Footer from '../_components/footer';
import HeadingMain from '../_components/headingMain';
import HeroSection from '../_components/hero-section';

const products = [
  {
    name: 'GUAR REFINED DALL',
    description:
      'Guar refined dall is obtained after processing guar seeds. It is widely used in various industries and food applications due to its high-quality standards and purity.',
    image: `https://images.jdmagicbox.com/quickquotes/images_main/guar-refined-splits-neepo-splits-93-378580090-opje1.jpg`, 
    alt: 'Guar refined dall',
  },
  {
    name: 'GUAR ROASTED KORMA',
    description:
      'Roasted Guar Korma is a high-protein animal feed supplement. It is roasted at high temperatures to enhance its protein content, making it highly digestible and nutritious for livestock and poultry.',
    image: 'https://prodigyfoods.in/wp-content/uploads/2019/09/roasted.jpg',
    alt: 'Guar roasted korma',
  },
  {
    name: 'GUAR CHURI',
    description:
      'Guar Churi is a by-product of guar gum processing, rich in protein and fiber. It is widely used in the cattle feed industry as a cost-effective and nutritious feed ingredient.',
    image: 'https://5.imimg.com/data5/FG/MV/OQ/SELLER-13496523/cottan-seed-binola-.jpg', 
    alt: 'Guar churi',
  },
  {
    name: 'CUMIN SEED (JEERA)',
    description:
      'Cumin seed, also known as Jeera, is one of the most widely used spices in Indian cuisine. It has a distinct aroma and flavor and is known for its health benefits, including aiding digestion.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVriOYiylS_ZqbRngEh9USE5Idr2kSIX99A&s', 
    alt: 'Cumin seed (Jeera)',
  },
  {
    name: 'DILL SEED',
    description:
      'Dill seed is an aromatic spice widely used in pickling, seasoning, and herbal medicine. It has antibacterial properties and is known for its health benefits, including improving digestion.',
    image: 'https://m.media-amazon.com/images/I/6105b8CYHZL.jpg', 
    alt: 'Dill seed',
  },
  {
    name: 'PSYLLIUM HUSK',
    description:
      'Psyllium husk is a high-fiber product used as a natural laxative and dietary supplement. It is widely used in pharmaceuticals, food, and dietary industries for its digestive benefits.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Psyllium_seed_husk_pile.JPG/1200px-Psyllium_seed_husk_pile.JPG', 
    alt: 'Psyllium husk',
  },
  {
    name: 'FENNEL SEED',
    description:
      'Fennel seed is a flavorful spice with a sweet and aromatic taste. It is commonly used in cooking, herbal tea, and as a digestive aid due to its carminative properties.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZUO_pFV3HLpHYZnVnuLb7pOTX08zbafsmDA&s', 
    alt: 'Fennel seed',
  },
  {
    name: 'FENUGREEK SEED',
    description:
      'Fenugreek seed is a powerful medicinal spice known for its numerous health benefits. It is used in food seasoning, herbal remedies, and as a dietary supplement for digestion and blood sugar control.',
    image: 'https://cdn.britannica.com/05/118605-004-4D6BF054/Seeds-fenugreek.jpg?w=400&h=300&c=crop', 
    alt: 'Fenugreek seed',
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
