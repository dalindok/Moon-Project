import React from "react";
import raksa from '../../assets/aboutus/raksa.png';
import dalin from '../../assets/aboutus/dalin.png';
import nita from '../../assets/aboutus/nita.png';
import github from '../../assets/aboutus/github.png';
import telegram from '../../assets/aboutus/telegram.png';

type TeamMember = {
  name: string;
  role: string;
  email: string;
  github: string;
  telegram: string;
  imageUrl: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Chom Thonita",
    role: "Team Member",
    email: "ithonida@gmail.com",
    github: "https://github.com/Thonida1045",
    telegram: "https://t.me/Chom_Thonida",
    imageUrl: nita,
  },
  {
    name: "Dok Dalin",
    role: "Leader",
    email: "dalindok211@gmail.com",
    github: "https://github.com/dalindok",
    telegram: "https://t.me/DalinDok",
    imageUrl: dalin,
  },
  {
    name: "Nhe Sokraksa",
    role: "Team Member",
    email: "nhesokraksa2345@gmail.com",
    github: "https://github.com/Sokraksa01",
    telegram: "https://telegram.me/nhesokraksa",
    imageUrl: raksa,
  },
];

const Team: React.FC = () => {
  return (
    <div className="text-center px-4 py-10">
      <h1 className="text-3xl sm:text-6xl md:text-5xl font-bold mb-2">Meet</h1>
      <h2 className="text-2xl sm:text-5xl md:text-4xl font-semibold text-rose-300 mb-6">Our Team</h2>
      <p className="text-gray-600 text-xl">
        Meet the passionate team behind WingedLetter, dedicated to helping you achieve your best skin 
      </p>
      <p className="text-gray-600 text-xl mb-5">through expert advice and community support.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 mt-4 pt-4 w-full sm:w-auto mx-auto transition-transform transform hover:scale-105"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="rounded-full w-28 h-28 mx-auto mb-4 border-4 border-rose-300 object-cover shadow-md"
            />
            <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <p className="text-sm text-gray-500 mb-4">Contact: {member.email}</p>
            <div className="flex justify-center space-x-4">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="w-6 h-6" />
              </a>
              <a href={member.telegram} target="_blank" rel="noopener noreferrer">
                <img src={telegram} alt="Telegram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
