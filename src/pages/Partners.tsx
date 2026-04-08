
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import CommunityLinks from '@/components/CommunityLinks';
import { Building2, Award, Briefcase, Users, Mail, Calendar } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation();

  const partnerCategories = [
    {
      title: t("partners.academic"),
      icon: <Building2 className="w-10 h-10 text-[#ffd630]" />,
      description: t("partners.academicDesc")
    },
    {
      title: t("partners.corporate"),
      icon: <Briefcase className="w-10 h-10 text-[#ffd630]" />,
      description: t("partners.corporateDesc")
    },
    {
      title: t("partners.government"),
      icon: <Award className="w-10 h-10 text-[#ffd630]" />,
      description: t("partners.governmentDesc")
    },
    {
      title: t("partners.community"),
      icon: <Users className="w-10 h-10 text-[#ffd630]" />,
      description: t("partners.communityDesc")
    }
  ];

  const upcomingEvents = [
    {
      title: "Partner Networking Event",
      date: "October 15, 2023",
      location: "West Tech Hub, Bafoussam",
      description: "Connect with our existing partners and explore collaboration opportunities."
    },
    {
      title: "Annual Partner Conference",
      date: "December 5-6, 2023",
      location: "Dschang University",
      description: "Our flagship event bringing together all partners to showcase impact and plan for the coming year."
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
                {t("partners.title")} <span className="text-[#ffd630]"></span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                {t("partners.subtitle")}
              </p>
              <div className="flex justify-center">
                <a 
                  href="#become-partner" 
                  className="px-8 py-3 bg-[#ffd630] text-black font-medium rounded-md hover:bg-[#ffd630]/90 transition-colors"
                >
                  {t("partners.becomePartner")}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Partner categories */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("partners.categories")} <span className="text-[#ffd630]"></span></h2>
              <p className="text-lg text-gray-700">
                {t("partners.categoriesDesc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerCategories.map((category, index) => (
                <div 
                  key={index} 
                  className="p-8 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current partners */}
        <PartnersSection />

        {/* Upcoming partner events */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("partners.upcomingEvents")} <span className="text-[#ffd630]"></span></h2>
              <p className="text-lg text-gray-700">
                {t("partners.upcomingEventsDesc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index} 
                  className="p-8 bg-white border border-gray-100 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-[#ffd630] mr-3" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-500 mb-3">{event.location}</p>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <a 
                    href="#" 
                    className="text-[#ffd630] font-medium hover:underline inline-flex items-center"
                  >
                    {t("partners.register")}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a partner */}
        <section id="become-partner" className="py-20 bg-black text-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("partners.becomePartnerTitle")} <span className="text-[#ffd630]"></span></h2>
              <p className="text-lg text-gray-300 mb-8">
                {t("partners.becomePartnerDesc")}
              </p>
            </div>

            <div className="max-w-xl mx-auto bg-white text-black p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">
                <Mail className="w-12 h-12 text-[#ffd630]" />
              </div>
              <h3 className="text-xl font-bold text-center mb-6">{t("partners.contactTeam")}</h3>
              <p className="text-gray-700 text-center mb-8">
                {t("partners.contactTeamDesc")}
              </p>
              <div className="text-center">
                <a 
                  href="mailto:partnerships@westtech.cm" 
                  className="inline-block px-8 py-3 bg-[#ffd630] text-black font-medium rounded-md hover:bg-[#ffd630]/90 transition-colors"
                >
                  {t("partners.emailUs")}
                </a>
              </div>
            </div>
          </div>
        </section>

        <CommunityLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
