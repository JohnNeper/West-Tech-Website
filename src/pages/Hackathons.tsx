
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Code, Trophy, Clock, Calendar, DollarSign, ChevronRight, BellRing } from "lucide-react";

const Hackathons = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center opacity-30"></div>
          
          <div className="container px-4 mx-auto relative z-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm">
                <span className="px-2 py-0.5 text-xs font-semibold text-black bg-[#ffd630] rounded-full mr-2">
                  BUILD
                </span>
                <p className="text-sm font-medium text-white">Solve Real Problems</p>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                <span className="text-[#ffd630]">Hackathons</span> to Build <br />
                Innovative Solutions
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Join our high-energy hackathons where teams collaborate to build solutions to real-world challenges
                in Western Cameroon.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#ffd630] hover:bg-[#ffd630]/90 text-black gap-2 h-14 px-8">
                  Upcoming Hackathons
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 h-14 px-8 border-white text-white hover:bg-white hover:text-black">
                  <BellRing className="h-5 w-5" />
                  Get Notified
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Hackathon */}
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <div className="sticky top-24">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                      alt="West Tech Hackathon 2023" 
                      className="w-full h-80 object-cover"
                    />
                    <div className="bg-[#ffd630] p-6">
                      <h3 className="text-2xl font-bold mb-2">West Tech Hackathon 2023</h3>
                      <p className="text-black/80 mb-4">The biggest tech competition in Western Cameroon</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                          <Calendar className="w-5 h-5 mb-2" />
                          <p className="text-sm font-medium">July 15-17, 2023</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                          <Clock className="w-5 h-5 mb-2" />
                          <p className="text-sm font-medium">48 Hours</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                          <DollarSign className="w-5 h-5 mb-2" />
                          <p className="text-sm font-medium">$5,000 Prize Pool</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                          <Trophy className="w-5 h-5 mb-2" />
                          <p className="text-sm font-medium">10 Teams</p>
                        </div>
                      </div>
                      
                      <Button size="lg" className="w-full bg-black hover:bg-black/90 text-white">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">About the Hackathon</h2>
                <p className="text-gray-700 mb-6">
                  The West Tech Hackathon brings together developers, designers, and business minds to 
                  create innovative solutions to challenges facing Western Cameroon. Over an intense 
                  48-hour period, teams will conceptualize, build, and present their projects to a panel 
                  of industry experts.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Challenge Tracks</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#ffd630] p-2 rounded-lg mr-4">
                        <Code className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold">HealthTech</h4>
                        <p className="text-gray-600">Solutions addressing healthcare access and delivery</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#ffd630] p-2 rounded-lg mr-4">
                        <Code className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold">AgriTech</h4>
                        <p className="text-gray-600">Innovations for agricultural productivity and sustainability</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#ffd630] p-2 rounded-lg mr-4">
                        <Code className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold">FinTech</h4>
                        <p className="text-gray-600">Tools for financial inclusion and economic empowerment</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 mb-8 text-gray-700">
                  <li>Teams of 3-5 members</li>
                  <li>At least one technical person per team</li>
                  <li>Bring your own laptops and equipment</li>
                  <li>Preliminary idea submission before the event</li>
                  <li>All skill levels welcome!</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-4">Judging Criteria</h3>
                <ul className="list-disc pl-5 space-y-2 mb-8 text-gray-700">
                  <li><span className="font-medium">Innovation (25%)</span>: Originality and creativity of the solution</li>
                  <li><span className="font-medium">Impact (25%)</span>: Potential to address the challenge effectively</li>
                  <li><span className="font-medium">Technical Implementation (25%)</span>: Quality and completeness of the prototype</li>
                  <li><span className="font-medium">Business Viability (25%)</span>: Market potential and sustainability of the solution</li>
                </ul>
                
                <div className="bg-gray-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Past Winners Spotlight</h3>
                  <p className="text-gray-700 mb-4">
                    Our previous hackathon winners have gone on to secure funding, join accelerator programs, 
                    and launch successful startups. Join the ranks of these innovative teams!
                  </p>
                  <Button variant="outline" className="border-[#ffd630] text-black hover:bg-[#ffd630] hover:text-black">
                    View Success Stories
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Hackathons;
