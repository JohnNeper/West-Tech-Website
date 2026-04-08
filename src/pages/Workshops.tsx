
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, Calendar, Users, ChevronRight } from "lucide-react";

const Workshops = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
                <span className="px-2 py-0.5 text-xs font-semibold text-black bg-[#ffd630] rounded-full mr-2">For Students</span>
                <p className="text-sm font-medium text-gray-700">Skill-building workshops</p>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hands-on <span className="text-[#ffd630]">Workshops</span>
              </h1>
              <p className="text-lg text-gray-700">
                Our workshops are designed for students and young professionals looking to gain practical skills
                in programming, design, entrepreneurship, and more.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Workshop Item 1 */}
              <div className="mb-10 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                      alt="Web Development Workshop" 
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#ffd630] text-black text-sm font-semibold rounded-full">
                      Upcoming
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Coding</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Beginners</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Web Development Bootcamp</h3>
                    <p className="text-gray-600 mb-4">
                      Learn to build responsive websites using HTML, CSS, and JavaScript in this intensive 2-day workshop.
                    </p>
                    
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-[#ffd630] mr-2" />
                        <span className="text-sm text-gray-600">June 15-16, 2023</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-[#ffd630] mr-2" />
                        <span className="text-sm text-gray-600">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-[#ffd630] mr-2" />
                        <span className="text-sm text-gray-600">30 spots available</span>
                      </div>
                    </div>
                    
                    <Button className="bg-[#ffd630] hover:bg-[#ffd630]/90 text-black gap-2">
                      Register Now
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Workshop Item 2 */}
              <div className="mb-10 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                      alt="UI/UX Design Workshop" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Design</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Intermediate</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">UI/UX Design Masterclass</h3>
                    <p className="text-gray-600 mb-4">
                      Master the principles of user interface and experience design with industry-standard tools.
                    </p>
                    
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-[#ffd630] mr-2" />
                        <span className="text-sm text-gray-600">June 22-23, 2023</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-[#ffd630] mr-2" />
                        <span className="text-sm text-gray-600">10:00 AM - 3:00 PM</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-[#ffd630] mr-2" />
                        <span className="text-sm text-gray-600">25 spots available</span>
                      </div>
                    </div>
                    
                    <Button className="bg-[#ffd630] hover:bg-[#ffd630]/90 text-black gap-2">
                      Register Now
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Workshop Item 3 */}
              <div className="mb-10 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                      alt="Business Model Canvas Workshop" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Business</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">All Levels</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Business Model Canvas Workshop</h3>
                    <p className="text-gray-600 mb-4">
                      Learn how to design, test, and validate your business model using the Business Model Canvas framework.
                    </p>
                    
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-[#ffd630] mr-2" />
                        <span className="text-sm text-gray-600">June 30, 2023</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-[#ffd630] mr-2" />
                        <span className="text-sm text-gray-600">1:00 PM - 5:00 PM</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-[#ffd630] mr-2" />
                        <span className="text-sm text-gray-600">35 spots available</span>
                      </div>
                    </div>
                    
                    <Button className="bg-[#ffd630] hover:bg-[#ffd630]/90 text-black gap-2">
                      Register Now
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center">
                <GraduationCap className="text-[#ffd630] w-6 h-6 mr-2" />
                <p className="text-gray-700">
                  All workshops include certificates of completion and ongoing community support.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Workshops;
