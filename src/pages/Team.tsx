
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import { Card } from '@/components/ui/card';
import { Users } from "lucide-react";

const Team = () => {
  const teamValues = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to create impactful solutions."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of working together across different fields and backgrounds."
    },
    {
      title: "Local Impact",
      description: "We focus on creating solutions that address specific challenges in our community."
    },
    {
      title: "Inclusivity",
      description: "We ensure that our programs and opportunities are accessible to everyone with talent and drive."
    },
    {
      title: "Excellence",
      description: "We maintain high standards in everything we do, from code to community engagement."
    },
    {
      title: "Knowledge Sharing",
      description: "We believe in open exchange of ideas and skills to elevate the entire ecosystem."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-[#ffd630]">Team</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Meet the passionate individuals working to empower tech innovation
                and entrepreneurship in Western Cameroon.
              </p>
            </div>
          </div>
        </section>

        {/* Team members */}
        <TeamSection />

        {/* Values section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-[#ffd630]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-[#ffd630]">Core Values</span>
              </h2>
              <p className="text-lg text-gray-700">
                The principles that guide our team in building a stronger tech ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamValues.map((value, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join the team section */}
        <section className="py-20 bg-black text-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our <span className="text-[#ffd630]">Team</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals who are passionate about
                tech and innovation in Cameroon.
              </p>
              <a 
                href="mailto:careers@westtech.cm" 
                className="inline-block px-8 py-3 bg-[#ffd630] text-black font-medium rounded-md hover:bg-[#ffd630]/90 transition-colors"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
