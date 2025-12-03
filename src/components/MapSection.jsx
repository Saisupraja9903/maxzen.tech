import React from "react";

const MapSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center bg-white w-full h-[500px]">
      {/* Left Info Box */}
      <div className="md:absolute left-10 z-10 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg w-[300px] md:w-[350px]">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Maxzen Tech</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          4th Floor, Manjeera Trinity Corporate,<br />
          408, JNTU - Hitech City Rd,<br />
          Kukatpally Housing Board Colony,<br />
          Hyderabad, Telangana 500072
        </p>
        <p className="mt-2 text-yellow-500 font-semibold">⭐ 5.0 Rating</p>
        <a
          href="https://www.google.com/maps/place/Maxzen+Tech/@17.484795,78.389441,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-blue-600 hover:underline"
        >
          View larger map →
        </a>
      </div>

      {/* Google Map Embed */}
      <iframe
        title="Maxzen Tech Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.520994853993!2d78.38726637473282!3d17.484801583412598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c7e5b9a1a1%3A0x1c9a7e04bbbc1a2e!2sMaxzen%20Tech!5e0!3m2!1sen!2sin!4v1698682000000!5m2!1sen!2sin"
        className="w-full h-[500px] rounded-lg border-none"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;
