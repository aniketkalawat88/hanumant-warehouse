import React from "react";

const products = [
  {
    title: "FOOD GRADE GUAR GUM",
    description:
      "Guar gum, also called guaran, is a substance made from guar beans which has thickening and stabilizing properties useful in various industries, traditionally the food industry, but increasingly the hydraulic fracturing industry.The guar seeds are dehusked, milled and screened to obtain the guar gum .",
    image:
      "https://storage.googleapis.com/a1aa/image/6yguFzPA_hL5ZaYesBiYHFU6xtN7c3uhdg8jQ07bptM.jpg",
  },
  {
    title: "INDUSTRIAL GRADE GUAR GUM",
    description:
      "Guar gum is a white to creamy coloured, free flowing powder and free from extraneous matter. It is used as a Natural thickener, Emulsifier, Stabiliser, Bonding agent, Hydrocolloids, Gelling agent, Soil Stabilizer, Natural fiber, Flocculant, Fracturing agent, etc",
    image:
      "https://storage.googleapis.com/a1aa/image/c4xpyWOQrDYaDnACVtxEShJQBWWQECiZ75HKPAQzNXY.jpg",
  },
];

const HomeSection = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-6xl mx-auto relative md:h-[38rem] w-full max-md:p-6 text-center">
        <div className="grid grid-cols-1 md:absolute md:grid-cols-2 max-w-7xl w-full bottom-10 bg-white md:p-16 p-6 mx-auto border-8 border-primary-main/50">
          {products.map((product, index) => (
            <div key={index} className="mx-auto max-w-sm">
              <img
                alt={product.title}
                className="mx-auto mb-4 md:h-96 h-56"
                src={product.image}
              />
              <h3 className="text-2xl font-bold mb-2 text-primary-main">
                {product.title}
                <span className="border mt-2 border-primary-main block w-36 mx-auto"></span>{" "}
              </h3>
              <p className="text-black leading-8 my-4 text-justify">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
