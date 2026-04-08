import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const TeamSection: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "Jean Nkameni",
      roleKey: 'team.member1.role',
      bioKey: 'team.member1.bio',
      image: "/lovable-uploads/c5268b09-fb94-43b8-a9fd-ad307d82ebae.png",
      social: { linkedin: "#", twitter: "#", email: "jean@westtech.cm" }
    },
    {
      name: "Marie Tagne",
      roleKey: 'team.member2.role',
      bioKey: 'team.member2.bio',
      image: "",
      social: { linkedin: "#", twitter: "#", email: "marie@westtech.cm" }
    },
    {
      name: "Paul Kamga",
      roleKey: 'team.member3.role',
      bioKey: 'team.member3.bio',
      image: "",
      social: { linkedin: "#", twitter: "#", email: "paul@westtech.cm" }
    },
    {
      name: "Claire Nono",
      roleKey: 'team.member4.role',
      bioKey: 'team.member4.bio',
      image: "",
      social: { linkedin: "#", twitter: "#", email: "claire@westtech.cm" }
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-warm-brown mb-4">
            {t('team.subtitle')}
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            {t('team.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-muted">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-warm-dark">
                    <span className="font-display text-5xl text-warm-gold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-warm-dark/0 group-hover:bg-warm-dark/30 transition-colors duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <a href={member.social.linkedin} className="text-white hover:text-warm-gold transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.social.twitter} className="text-white hover:text-warm-gold transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-white hover:text-warm-gold transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="font-display text-xl text-foreground mb-1">{member.name}</h3>
              <p className="font-body text-sm tracking-wider uppercase text-warm-gold mb-2">{t(member.roleKey)}</p>
              <p className="font-body text-sm text-foreground/50">{t(member.bioKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
