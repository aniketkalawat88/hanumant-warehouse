import React from "react";

const HeadingMain = ({name}) => {
  return (
    <div className="text-center mb-8">
      <div className="border-t-2 border-primary-main w-44 mx-auto mb-1" />
      <div className="text-3xl sm:text-4xl font-bold text-secondary-main">{name}</div>
      <div className="border-t-2 border-primary-main w-44 mx-auto mt-2" />
    </div>
  );
};

export default HeadingMain;
