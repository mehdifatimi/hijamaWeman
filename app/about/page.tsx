'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { slideUp } from '@/lib/animations';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { GraduationCap, Clock, Heart, Award, Users, Sparkles } from 'lucide-react';

export default function AboutPage() {
    const values = [
        {
            icon: <Heart size={32} className="text-gold-500" />,
            title: "Bienveillance",
            description: "Une approche douce et respectueuse de votre bien-être"
        },
        {
            icon: <Users size={32} className="text-gold-500" />,
            title: "Espace Femmes",
            description: "Un environnement 100% féminin pour votre confort"
        },
        {
            icon: <Award size={32} className="text-gold-500" />,
            title: "Excellence",
            description: "Des soins de qualité avec du matériel professionnel"
        },
        {
            icon: <Sparkles size={32} className="text-gold-500" />,
            title: "Hygiène",
            description: "Protocoles stricts et matériel stérile à usage unique"
        }
    ];

    return (
        <div className="pt-24">
            {/* Hero Section with Background */}
            <section className="relative bg-gradient-to-br from-beige-50 via-rose-50 to-gold-50 py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5OTk5OTkiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTI0IDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0xMiAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
                    <motion.h1
                        className="font-playfair text-5xl md:text-7xl font-bold text-gray-800 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        À Propos
                    </motion.h1>
                    <motion.p
                        className="font-poppins text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Un espace dédié au bien-être des femmes, alliant tradition et professionnalisme
                    </motion.p>
                </div>
            </section>

            {/* Mission Section with Image */}
            <Section className="bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideUp}
                        >
                            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/Gemini_Generated_Image_4eu9ok4eu9ok4eu9.png"
                                    alt="Centre de bien-être exclusivement pour femmes"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideUp}
                            className="space-y-6"
                        >
                            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800">
                                Notre Mission
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-rose-400"></div>
                            <p className="font-poppins text-lg text-gray-600 leading-relaxed">
                                Hijama Femmes est un centre de bien-être exclusivement réservé aux femmes, dédié à la pratique de la hijama thérapeutique dans un environnement bienveillant, respectueux et professionnel.
                            </p>
                            <p className="font-poppins text-lg text-gray-600 leading-relaxed">
                                Notre mission est d'offrir aux femmes un espace où elles peuvent prendre soin de leur santé et de leur bien-être en toute confiance, dans le respect de leur intimité et de leurs besoins spécifiques.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Practitioner Section */}
            <Section className="bg-gradient-to-br from-beige-50 to-rose-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideUp}
                            className="space-y-6 order-2 lg:order-1"
                        >
                            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800">
                                Votre Praticienne
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-rose-400"></div>
                            <p className="font-poppins text-lg text-gray-600 leading-relaxed">
                                Formée et certifiée en hijama thérapeutique, notre praticienne possède plusieurs années d'expérience dans l'accompagnement des femmes vers un mieux-être naturel.
                            </p>
                            <p className="font-poppins text-lg text-gray-600 leading-relaxed">
                                Passionnée par les médecines douces et le bien-être holistique, elle met son expertise au service de votre santé avec une approche personnalisée et respectueuse.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <GraduationCap size={32} className="text-gold-500 mb-3" />
                                    <p className="font-poppins text-sm font-semibold text-gray-800 mb-1">Certifiée</p>
                                    <p className="font-poppins text-xs text-gray-600">Hijama thérapeutique</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <Clock size={32} className="text-gold-500 mb-3" />
                                    <p className="font-poppins text-sm font-semibold text-gray-800 mb-1">5+ ans</p>
                                    <p className="font-poppins text-xs text-gray-600">D'expérience</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <Heart size={32} className="text-gold-500 mb-3" />
                                    <p className="font-poppins text-sm font-semibold text-gray-800 mb-1">Bienveillante</p>
                                    <p className="font-poppins text-xs text-gray-600">À l'écoute</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideUp}
                            className="order-1 lg:order-2"
                        >
                            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/Gemini_Generated_Image_gphnm1gphnm1gphn.png"
                                    alt="Praticienne certifiée en hijama thérapeutique"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Values Section */}
            <Section className="bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                    >
                        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Nos Valeurs
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-rose-400 mx-auto mb-6"></div>
                        <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
                            Des principes qui guident chacune de nos actions pour votre bien-être
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={slideUp}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="text-center h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                    <div className="flex justify-center mb-4">
                                        {value.icon}
                                    </div>
                                    <h3 className="font-playfair text-xl font-bold text-gray-800 mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="font-poppins text-gray-600 text-sm">
                                        {value.description}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="bg-gradient-to-br from-gold-50 via-beige-50 to-rose-50">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                        className="space-y-8"
                    >
                        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800">
                            Prête à Commencer Votre Parcours de Bien-être ?
                        </h2>
                        <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
                            Prenez rendez-vous dès aujourd'hui et découvrez les bienfaits de la hijama dans un environnement bienveillant et professionnel.
                        </p>
                        <Button href="/contact" variant="primary" className="px-12 py-4 text-lg">
                            Prendre Rendez-vous
                        </Button>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
}
