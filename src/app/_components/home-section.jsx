import React from "react";

const products = [
  {
    title: "PSYLLIUM HUSK",
    description:
      "Psyllium Husk is a natural dietary fiber derived from the Plantago ovata plant. It is widely used in health supplements, digestive health products, and gluten-free baking. Known for its ability to absorb water and improve gut health, psyllium husk is a key ingredient in many pharmaceutical and food applications.",
    image:
      "https://3.imimg.com/data3/BS/XN/MY-6208623/psyllium-husk-powder-500x500.jpg",
  },
  {
    title: "FENNEL SEED",
    description:
      "Fennel seeds are aromatic, flavorful, and rich in essential oils. They are used as a spice in cooking, a key ingredient in herbal teas, and a natural remedy for digestive issues. Fennel seeds are also known for their antioxidant properties and are widely used in Ayurvedic and traditional medicine.",
    image:
      "https://5.imimg.com/data5/AC/EV/MY-5403766/fennel-seeds.jpg",
  },
];

const HomeSection = () => {
  return (
    // <section className="bg-gray-100">
    //   <div className="max-w-6xl mx-auto relative md:h-[38rem] w-full max-md:p-6 text-center">
    //     <div className="grid grid-cols-1 md:absolute md:grid-cols-2 max-w-7xl w-full bottom-10 bg-white md:p-16 p-6 mx-auto border-8 border-primary-main/50">
    //       {products.map((product, index) => (
    //         <div key={index} className="mx-auto max-w-sm">
    //           <img
    //             alt={product.title}
    //             className="mx-auto mb-4 md:h-80 h-56 w-full"
    //             src={product.image}
    //           />
    //           <h3 className="text-2xl font-bold mb-2 text-primary-main">
    //             {product.title}
    //             <span className="border mt-2 border-primary-main block w-36 mx-auto"></span>
    //           </h3>
    //           <p className="text-black leading-8 my-4 text-justify">
    //             {product.description}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <div class="max-w-7xl mx-auto py-12 px-4">
     <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-green-800">
       Our Products
      </h1>
      <p class="text-lg text-green-700 mt-2">
       Lorem ipsum dolor sit amet consectetur. Tempus metus cras non diam. Porta urna et nec massa.
      </p>
     </div>
     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
       <img alt="A pile of finely ground product" class="w-full h-48 object-cover" height="400" src="https://storage.googleapis.com/a1aa/image/Ux1cDRLI6H-xJ8ECW_Kxb_pYGfZYkJW3w4EMmxts3CQ.jpg" width="600"/>
       <div class="p-4">
        <h2 class="text-xl font-bold mb-2">
         Product 1
        </h2>
        <p class="text-gray-700 mb-4">
         Lorem ipsum dolor sit amet consectetur. Diam id egestas enim ut gravida penatibus.
        </p>
        <button class="bg-transparent text-green-800 font-semibold py-2 px-4 border border-green-800 rounded hover:bg-green-800 hover:text-white transition duration-300">
         Learn More
        </button>
       </div>
      </div>
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
       <img alt="A pile of finely ground product" class="w-full h-48 object-cover" height="400" src="https://storage.googleapis.com/a1aa/image/Ux1cDRLI6H-xJ8ECW_Kxb_pYGfZYkJW3w4EMmxts3CQ.jpg" width="600"/>
       <div class="p-4">
        <h2 class="text-xl font-bold mb-2">
         Product 1
        </h2>
        <p class="text-gray-700 mb-4">
         Lorem ipsum dolor sit amet consectetur. Diam id egestas enim ut gravida penatibus.
        </p>
        <button class="bg-transparent text-green-800 font-semibold py-2 px-4 border border-green-800 rounded hover:bg-green-800 hover:text-white transition duration-300">
         Learn More
        </button>
       </div>
      </div>
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
       <img alt="A pile of finely ground product" class="w-full h-48 object-cover" height="400" src="https://storage.googleapis.com/a1aa/image/Ux1cDRLI6H-xJ8ECW_Kxb_pYGfZYkJW3w4EMmxts3CQ.jpg" width="600"/>
       <div class="p-4">
        <h2 class="text-xl font-bold mb-2">
         Product 1
        </h2>
        <p class="text-gray-700 mb-4">
         Lorem ipsum dolor sit amet consectetur. Diam id egestas enim ut gravida penatibus.
        </p>
        <button class="bg-transparent text-green-800 font-semibold py-2 px-4 border border-green-800 rounded hover:bg-green-800 hover:text-white transition duration-300">
         Learn More
        </button>
       </div>
      </div>
     </div>
    </div>

  );
};

export default HomeSection;
