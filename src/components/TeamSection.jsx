// import React from "react";
// import bglogo1 from "../assests/bglogo1.jpg"; // ← your background image here
// import logoo9 from "../assests/logoo9.png";

// const teamMembers = [
//   { name: "Prudhvi", role: "IT Technician", image: logoo9 },
//   { name: "Sai Kiran", role: "Developer", image: logoo9 },
//   { name: "Nayomi", role: "UI Designer", image: logoo9 },
//   { name: "Yashwanth", role: "Backend Engineer", image: logoo9 },
//   { name: "Pratap", role: "Full Stack Developer", image: logoo9 },
//   { name: "Lokesh", role: "Web Developer", image: logoo9 },
//   { name: "Alekhya", role: "Tester", image: logoo9 },
//   { name: "Manikanta", role: "Software Engineer", image:logoo9 },
// ];

// const TeamSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center py-16"
//       style={{ backgroundImage: `url(${bglogo1})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-3 gap-10 items-center">
//           {/* Left Section - Text */}
//           <div className="col-span-1 text-white">
//             <p className="uppercase tracking-widest text-red-400 font-semibold">
//               Technical Experts
//             </p>
//             <h2 className="text-4xl font-bold mt-3 mb-6">People In Our Team</h2>
//             <p className="text-lg text-gray-200 mb-8 leading-relaxed">
//               “Our team consists of highly skilled technical experts with
//               extensive experience in software development, cloud computing, and
//               AI-driven solutions.”
//             </p>
//             <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
//               Join our Team
//             </button>
//           </div>

//           {/* Right Section - Team Grid */}
//           <div className="col-span-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 className="relative rounded-2xl border border-gray-300 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-64 object-cover rounded-2xl"
//                 />
//                 <div className="absolute inset-0 bg-black/40 rounded-2xl flex flex-col justify-end p-4">
//                   <p className="text-sm text-gray-200">{member.role}</p>
//                   <h3 className="text-xl font-bold text-white">
//                     {/* <h3 className="text-xl font-bold text-white click the image the image will rotate backside and display a plan background with her name and some details about that person i want perfect graphical design without changing of structure of the code"> */}
//                     {member.name}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;---------------------------------------rotate cards-----------------

// import React, { useState } from "react";
// import bglogo1 from "../assests/bglogo1.jpg"; // background image
// import logoo9 from "../assests/logoo9.png";

// const teamMembers = [
//   { name: "Prudhvi", role: "IT Technician", desc: "Expert in network systems and hardware setup.", image: logoo9 },
//   { name: "Sai Kiran", role: "Developer", desc: "Full-stack developer skilled in MERN and cloud.", image: logoo9 },
//   { name: "Nayomi", role: "UI Designer", desc: "Creative UI/UX designer with Figma expertise.", image: logoo9 },
//   { name: "Yashwanth", role: "Backend Engineer", desc: "Specializes in scalable backend systems.", image: logoo9 },
//   { name: "Pratap", role: "Full Stack Developer", desc: "Experienced in React, Node.js, and APIs.", image: logoo9 },
//   { name: "Lokesh", role: "Web Developer", desc: "Front-end developer focusing on performance.", image: logoo9 },
//   { name: "Alekhya", role: "Tester", desc: "QA engineer ensuring product stability.", image: logoo9 },
//   { name: "Manikanta", role: "Software Engineer", desc: "Passionate about building innovative solutions.", image: logoo9 },
// ];

// const TeamSection = () => {
//   const [flipped, setFlipped] = useState(Array(teamMembers.length).fill(false));

//   const handleFlip = (index) => {
//     const newFlipped = [...flipped];
//     newFlipped[index] = !newFlipped[index];
//     setFlipped(newFlipped);
//   };

//   return (
//     <section
//       className="relative bg-cover bg-center py-16"
//       style={{ backgroundImage: `url(${bglogo1})` }}
//     >
//       {/* Overlay with blur and transparency */}
//       <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-3 gap-10 items-center">
//           {/* Left Section - Text */}
//           <div className="col-span-1 text-white">
//             <p className="uppercase tracking-widest text-red-400 font-semibold">
//               Technical Experts
//             </p>
//             <h2 className="text-4xl font-bold mt-3 mb-6">People In Our Team</h2>
//             <p className="text-lg text-gray-200 mb-8 leading-relaxed">
//               “Our team consists of highly skilled technical experts with
//               extensive experience in software development, cloud computing, and
//               AI-driven solutions.”
//             </p>
//             <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
//               Join our Team
//             </button>
//           </div>

//           {/* Right Section - Team Grid */}
//           <div className="col-span-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 className="relative w-full h-64 [perspective:1000px] cursor-pointer"
//                 onClick={() => handleFlip(index)}
//               >
//                 <div
//                   className={`relative w-full h-full rounded-2xl transition-transform duration-700 transform-style-preserve-3d ${
//                     flipped[index] ? "[transform:rotateY(180deg)]" : ""
//                   }`}
//                 >
//                   {/* Front Side */}
//                   <div className="absolute inset-0 backface-hidden">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover rounded-2xl shadow-lg"
//                     />
//                     <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 rounded-2xl">
//                       <p className="text-sm text-gray-200">{member.role}</p>
//                       <h3 className="text-xl font-bold text-white">
//                         {member.name}
//                       </h3>
//                     </div>
//                   </div>

//                   {/* Back Side */}
//                   <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-gray-300 rounded-2xl flex flex-col justify-center items-center text-center px-4 [transform:rotateY(180deg)] backface-hidden">
//                     <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
//                     <p className="text-red-400 mb-3">{member.role}</p>
//                     <p className="text-gray-200 text-sm">{member.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;

import React from "react";
import bglogo1 from "../assests/bglogo1.jpg";
import logoo9 from "../assests/logoo9.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Team1 from "../assests/Team1.jpg";
import Team2 from "../assests/Team2.jpeg";
import Team3 from "../assests/Team3.png";
import Team4 from "../assests/Team4.png";
import Team5 from "../assests/Team5.jpg";
import Team6 from "../assests/Team6.png";
import Team7 from "../assests/Team7.png";
import Team8 from "../assests/Team8.png";
import Team9 from "../assests/Team9.jpg"; 
import Team10 from "../assests/Team10.png";
import Team11 from "../assests/Team11.jpg";
import Team12 from "../assests/Team12.jpg";
import Team13 from "../assests/Team13.jpg";
import Team14 from "../assests/Team14.jpg";
import Team15 from "../assests/Team15.jpeg";


const teamMembers = [
  { name: "Vamsi", role: "CEO", desc: "CEO of Maxzen.", image:Team1 },
   { name: "Gayathri", role: "Manager", desc: "plans, organizes, guides, and monitors team activities to achieve company goals and ensure smooth workflow.", image:Team15 },
  { name: "Jessi", role: "HR Manager", desc: "HR manager with expertise in recruitment and onboarding.", image: Team2 },
  { name: "Usha", role: "BDM", desc: "key professional responsible for growing a company’s business by finding new opportunities, building strong relationships, and driving revenue.", image: Team3 },
  { name: "Prudhvi", role: "Web Developer", desc: "creates and maintains websites using coding, design, and technical skills to ensure smooth functionality and user experience.", image: Team4 },
  { name: "Lokesh", role: "Web Developer", desc: "Front-end developer focusing on performance.", image: Team5 },
  { name: "Sai Kiran", role: "Digital Marketer", desc: "Creates and optimizes digital marketing campaigns to boost visibility and engagement.", image: Team6 },
  { name: "Alekhya", role: "Full Stack Developer", desc: "Builds scalable front-end and back-end applications using modern web technologies.", image: Team7 },
  { name: "Manikanta", role: "Full Stack Developer", desc: "Builds scalable front-end and back-end applications using modern web technologies..", image: Team9 },
  { name: "Prathap", role: "Full Stack Developer", desc: "Builds scalable front-end and back-end applications using modern web technologies.", image: Team8 },
  { name: "Nayomi", role: "Sales department", desc: "Focuses on achieving targets by identifying opportunities and delivering effective sales solutions.", image: Team10},
  { name: "Yaswanth", role: "Full Stack Developer", desc: "Builds scalable front-end and back-end applications using modern web technologies.", image: Team11 },
  { name: "Vamsi", role: "Digital Marketing Executive", desc: "Creates, optimizes, and analyzes digital marketing campaigns for improved performance and reach.", image: Team12 },
  { name: "Sudheer", role: "Digital Marketing Executive", desc: "Creates, optimizes, and analyzes digital marketing campaigns for improved performance and reach.", image: Team13 },
  { name: "Lokesh", role: " Frontend Developer", desc: "Transforms designs into interactive, high-quality web interfaces for smooth user experiences.", image: Team14 },

  
];
 

const TeamSection = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const navigate = useNavigate();
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${bglogo1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Left Section */}
          <div className="col-span-1 text-white">
            <p className="uppercase tracking-widest text-red-400 font-semibold">
              Technical Experts
            </p>
            <h2 className="text-4xl font-bold mt-3 mb-6">People In Our Team</h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              “Our team consists of highly skilled technical experts with
              extensive experience in software development, cloud computing, and
              AI-driven solutions.”
            </p>
            <button 
            onClick={() => navigate("/team")}
            className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Join our Team
            </button>
          </div>

          {/* Right Section - Cards */}
         <div className="col-span-2 overflow-x-auto whitespace-nowrap py-4 px-1 scrollbar-hide">
  <div className="inline-flex gap-6">
    {teamMembers.map((member, index) => (
      <div
        key={index}
        className="group w-56 h-64 inline-block mr-3 [perspective:1000px]"
      >
        <div
          className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
        >
          {/* FRONT SIDE */}
          <div
            className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-xl border border-gray-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>

          {/* BACK SIDE */}
          <div
            className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-white rounded-2xl shadow-xl flex flex-col justify-center items-center text-center p-4"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
            <p className="text-red-500 font-semibold mb-3">{member.role}</p>
            {/* <p className="text-gray-700 text-sm">{member.desc}</p> */}
             <p className="text-gray-700 text-sm whitespace-normal break-words tex-justify">
  {member.desc}
</p>

          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
