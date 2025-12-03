import React from "react";

const MarqueeText = () => {
  return (
    <div className="bg-black text-white overflow-hidden whitespace-nowrap py-4">
      <div className="animate-marquee inline-block">
        <span className="mx-8 text-lg tracking-wider">
          ✦ SEARCH ENGINE OPTIMIZATION  ✦ WEB DEVELOPMENT  ✦ DIGITAL MARKETING  ✦ PRODUCT DESIGN  ✦ MOBILE SOLUTIONS  ✦ BRAND STRATEGY  ✦ UI/UX DESIGN  ✦ CONTENT CREATION ✦
        </span>
        <span className="mx-8 text-lg tracking-wider ">
          ✦ SEARCH ENGINE OPTIMIZATION ✦ WEB DEVELOPMENT ✦ DIGITAL MARKETING ✦ PRODUCT DESIGN ✦ MOBILE SOLUTIONS ✦ BRAND STRATEGY ✦ UI/UX DESIGN ✦ CONTENT CREATION ✦
        </span>
      </div>
    </div>
  );
};

export default MarqueeText;
