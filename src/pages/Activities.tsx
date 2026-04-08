
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Calendar, Users, BookOpen, ChevronRight } from "lucide-react";

const Activities = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-[#ffd630]">Activities</span>
              </h1>
              <p className="text-lg text-gray-700">
                West Tech offers a variety of engaging activities designed to foster innovation,
                collaboration, and skill development in the tech ecosystem of Western Cameroon.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Activity Card 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                    alt="Tech Talk Sessions" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="px-4 py-1 bg-[#ffd630] text-black font-semibold rounded-full">Popular</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar className="w-5 h-5 text-[#ffd630] mr-2" />
                    <span className="text-sm text-gray-600">Weekly</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Tech Talk Sessions</h3>
                  <p className="text-gray-600 mb-4">
                    Weekly discussions led by industry experts on emerging technologies and market trends.
                  </p>
                  <Button variant="outline" className="w-full border-[#ffd630] text-black hover:bg-[#ffd630] hover:text-black mt-2">
                    Join Next Session
                  </Button>
                </div>
              </div>

              {/* Activity Card 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Networking Events" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-[#ffd630] mr-2" />
                    <span className="text-sm text-gray-600">Monthly</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Networking Events</h3>
                  <p className="text-gray-600 mb-4">
                    Connect with investors, mentors, and fellow entrepreneurs in a relaxed environment.
                  </p>
                  <Button variant="outline" className="w-full border-[#ffd630] text-black hover:bg-[#ffd630] hover:text-black mt-2">
                    View Calendar
                  </Button>
                </div>
              </div>

              {/* Activity Card 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
                    alt="Idea Pitching Sessions" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <BookOpen className="w-5 h-5 text-[#ffd630] mr-2" />
                    <span className="text-sm text-gray-600">Bi-weekly</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Idea Pitching Sessions</h3>
                  <p className="text-gray-600 mb-4">
                    Present your startup ideas and receive valuable feedback from experienced entrepreneurs.
                  </p>
                  <Button variant="outline" className="w-full border-[#ffd630] text-black hover:bg-[#ffd630] hover:text-black mt-2">
                    Register to Pitch
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button className="bg-[#ffd630] hover:bg-[#ffd630]/90 text-black gap-2 h-12 px-8">
                View All Activities
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

export default Activities;
