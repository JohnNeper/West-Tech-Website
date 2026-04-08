
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Rocket, Calendar, Briefcase, Users, ChevronRight, BarChart, Globe, Shield } from "lucide-react";

const Accelerator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ffd630]/10 blur-3xl rounded-l-full -z-10"></div>
          
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm">
                  <span className="px-2 py-0.5 text-xs font-semibold text-black bg-[#ffd630] rounded-full mr-2">
                    APPLY NOW
                  </span>
                  <p className="text-sm font-medium text-white">Next Cohort: Sept 2023</p>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                  From <span className="text-[#ffd630]">Idea</span> to <br />
                  <span className="text-[#ffd630]">Market-Ready</span> Startup
                </h1>
                
                <p className="text-xl text-gray-300 mb-8">
                  Our accelerator program connects promising startups with mentors, funding, and resources 
                  to scale their businesses and make a lasting impact in Africa.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#ffd630] hover:bg-[#ffd630]/90 text-black gap-2 h-14 px-8 shadow-lg shadow-[#ffd630]/20">
                    <Rocket className="h-5 w-5" />
                    Apply for Accelerator
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 h-14 px-8 border-white text-white hover:bg-white hover:text-black">
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/2 relative">
                <div className="relative z-10 bg-gradient-to-r from-black to-transparent p-4 md:p-0 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                    alt="West Tech Accelerator Program" 
                    className="rounded-xl w-full shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#ffd630]/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Program Benefits */}
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Accelerator <span className="text-[#ffd630]">Benefits</span>
              </h2>
              <p className="text-lg text-gray-700">
                Our comprehensive 6-month program is designed to provide startups with everything they need 
                to grow and succeed in the competitive tech ecosystem.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit Card 1 */}
              <div className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="w-14 h-14 bg-[#ffd630]/10 rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="w-7 h-7 text-[#ffd630]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Seed Funding</h3>
                <p className="text-gray-600 mb-4">
                  Up to $50,000 in seed funding to help you build and scale your product, with potential 
                  for follow-on investment.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>Equity-friendly terms</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>Performance-based tranches</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>Investor network access</span>
                  </li>
                </ul>
              </div>
              
              {/* Benefit Card 2 */}
              <div className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="w-14 h-14 bg-[#ffd630]/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-[#ffd630]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Mentorship</h3>
                <p className="text-gray-600 mb-4">
                  One-on-one guidance from successful entrepreneurs, industry experts, and technical advisors 
                  in our network.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>Weekly mentorship sessions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>Industry-specific advisors</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>Founder-to-founder support</span>
                  </li>
                </ul>
              </div>
              
              {/* Benefit Card 3 */}
              <div className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="w-14 h-14 bg-[#ffd630]/10 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-[#ffd630]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Market Access</h3>
                <p className="text-gray-600 mb-4">
                  Connect with potential customers, partners, and distributors across Cameroon and beyond.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>Corporate partnership opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>Customer acquisition support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>International expansion guidance</span>
                  </li>
                </ul>
              </div>
              
              {/* Benefit Card 4 */}
              <div className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="w-14 h-14 bg-[#ffd630]/10 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-7 h-7 text-[#ffd630]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Growth Strategy</h3>
                <p className="text-gray-600 mb-4">
                  Develop a scalable business model and growth strategy with our business development experts.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>Data-driven decisions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>KPI tracking framework</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>Scaling playbooks</span>
                  </li>
                </ul>
              </div>
              
              {/* Benefit Card 5 */}
              <div className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="w-14 h-14 bg-[#ffd630]/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#ffd630]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Legal & Operational Support</h3>
                <p className="text-gray-600 mb-4">
                  Get assistance with legal documentation, compliance, IP protection, and operational setup.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>Legal document templates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>Compliance guidance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>IP strategy development</span>
                  </li>
                </ul>
              </div>
              
              {/* Benefit Card 6 */}
              <div className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="w-14 h-14 bg-[#ffd630]/10 rounded-lg flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-[#ffd630]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Demo Day</h3>
                <p className="text-gray-600 mb-4">
                  Showcase your startup to a curated audience of investors, partners, and media on our high-profile Demo Day.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>Pitch preparation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>Investor matchmaking</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ffd630] rounded-full mr-2"></div>
                    <span>Media exposure</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Button className="bg-[#ffd630] hover:bg-[#ffd630]/90 text-black gap-2 h-12 px-8">
                Apply for Next Cohort
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Accelerator;
