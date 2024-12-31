import React from "react";

const Spinner = () => {
  return (
    <div>
      <div className="w-full flex-col flex items-center justify-center">
        <div className="w-10 h-10 bg-red-600 animate-ping rounded-full flex items-center justify relative">
          <div className="absolute inset-0 rounded-full bg-red-600 blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
