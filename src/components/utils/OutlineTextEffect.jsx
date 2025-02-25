import React from 'react';

const OutlineTextEffect = ({ title, classes }) => {
  return (
    <div className="flex flex-col justify-center">

      <div className="relative w-full flex justify-center items-center">
        {/* Outline Text (Behind) */}
        <h1 className={`  bsolute text-5xl text-center -mt-2.5 -ml-2.5 font-extrabold uppercase text-transparent stroke-textHeading ${classes}`}>
          {title}
        </h1>

        {/* Gradient Filled Text (Front) */}
        <h1 className={`absolute text-5xl text-center  font-extrabold uppercase text-white font-primary ${classes}`}>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default OutlineTextEffect;
