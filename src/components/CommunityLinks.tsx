
import React from 'react';
import { Github, Twitter, Linkedin, Facebook, Youtube, Globe } from "lucide-react";

const CommunityLinks: React.FC = () => {
  const communities = [
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      url: "https://twitter.com/WestTechCM",
      color: "bg-blue-400"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://linkedin.com/company/westtechcm",
      color: "bg-blue-700"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "https://facebook.com/WestTechCM",
      color: "bg-blue-600"
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/WestTechCM",
      color: "bg-gray-800"
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-6 h-6" />,
      url: "https://youtube.com/c/WestTechCM",
      color: "bg-red-600"
    },
    {
      name: "Website",
      icon: <Globe className="w-6 h-6" />,
      url: "https://westtech.cm",
      color: "bg-[#ffd630]"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Join Our <span className="text-[#ffd630]">Community</span></h2>
          <p className="text-lg text-gray-700">
            Connect with us on social media and be part of our growing community of innovators.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {communities.map((community, index) => (
            <a 
              key={index}
              href={community.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-lg hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className={`${community.color} text-white p-3 rounded-full mb-4`}>
                {community.icon}
              </div>
              <span className="font-medium">{community.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityLinks;
