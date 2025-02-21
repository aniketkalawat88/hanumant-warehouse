import React from 'react';
import HeadingMain from './headingMain';

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
  }
];

const HomeProducts = () => {
  return (
    <div className="bg-primary-main/10">
    <div className="max-w-7xl mx-auto py-10 max-md:px-6">
      {/* Title Section */}
      <div className="text-center mb-10">
        <HeadingMain name="Our Products" />
        <p className="text-base sm:text-lg text-color-main mt-2 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Tempus metus cras non diam. Porta
          urna et nec massa.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[1, 2, 3].map((product, index) => (
          <div key={index} className="bg-heaing-main rounded-lg shadow-md overflow-hidden">
            <img
              alt="A pile of finely ground product"
              className="w-full h-56 object-cover"
              src="https://storage.googleapis.com/a1aa/image/Ux1cDRLI6H-xJ8ECW_Kxb_pYGfZYkJW3w4EMmxts3CQ.jpg"
            />
            <div className="p-5">
              <h2 className="text-lg sm:text-xl font-bold mb-2 text-primary-main">
                Product {product}
              </h2>
              <p className="text-color-main text-sm sm:text-base mb-4">
                Lorem ipsum dolor sit amet consectetur. Diam id egestas enim ut
                gravida penatibus.
              </p>
              <button className="w-full sm:w-auto bg-transparent text-primary-main font-semibold py-2 px-4 border border-primary-main rounded hover:bg-secondary-main hover:text-white transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default HomeProducts;
