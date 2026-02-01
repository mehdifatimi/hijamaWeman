'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '@/lib/animations';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function AboutPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-beige-50 via-rose-50 to-sage-50 py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <motion.h1
                        className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        À Propos
                    </motion.h1>
                    <motion.p
                        className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Un espace dédié au bien-être des femmes, alliant tradition et professionnalisme
                    </motion.p>
                </div>
            </section>

            {/* About Content */}
            <Section className="bg-white">
                <div className="max-w-4xl mx-auto space-y-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                    >
                        <Card>
                            <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-6">
                                Notre Mission
                            </h2>
                            <p className="font-poppins text-gray-600 leading-relaxed mb-4">
                                Hijama Femmes est un centre de bien-être exclusivement réservé aux femmes, dédié à la pratique de la hijama thérapeutique dans un environnement bienveillant, respectueux et professionnel.
                            </p>
                            <p className="font-poppins text-gray-600 leading-relaxed">
                                Notre mission est d'offrir aux femmes un espace où elles peuvent prendre soin de leur santé et de leur bien-être en toute confiance, dans le respect de leur intimité et de leurs besoins spécifiques.
                            </p>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                    >
                        <Card>
                            <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-6">
                                Votre Praticienne
                            </h2>
                            <p className="font-poppins text-gray-600 leading-relaxed mb-4">
                                Formée et certifiée en hijama thérapeutique, notre praticienne possède plusieurs années d'expérience dans l'accompagnement des femmes vers un mieux-être naturel.
                            </p>
                            <p className="font-poppins text-gray-600 leading-relaxed mb-4">
                                Passionnée par les médecines douces et le bien-être holistique, elle met son expertise au service de votre santé avec une approche personnalisée et respectueuse.
                            </p>
                            <div className="mt-6 space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🎓</span>
                                    <span className="font-poppins text-gray-700">Certifiée en hijama thérapeutique</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">⏱️</span>
                                    <span className="font-poppins text-gray-700">Plus de 5 ans d'expérience</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">💚</span>
                                    <span className="font-poppins text-gray-700">Approche bienveillante et à l'écoute</span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                    >
                        <Card>
                            <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-6">
                                Notre Approche
                            </h2>
                            <p className="font-poppins text-gray-600 leading-relaxed mb-4">
                                Nous croyons en une approche holistique du bien-être, qui prend en compte la personne dans sa globalité : corps, esprit et émotions.
                            </p>
                            <p className="font-poppins text-gray-600 leading-relaxed mb-4">
                                Chaque séance est personnalisée en fonction de vos besoins spécifiques, de votre état de santé et de vos objectifs. Nous prenons le temps de vous écouter et de vous accompagner avec bienveillance tout au long de votre parcours de bien-être.
                            </p>
                            <p className="font-poppins text-gray-600 leading-relaxed">
                                La confidentialité, le respect de votre pudeur et votre confort sont nos priorités absolues.
                            </p>
                        </Card>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                    >
                        <Button href="/contact" variant="primary">
                            Prendre Rendez-vous
                        </Button>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
}
